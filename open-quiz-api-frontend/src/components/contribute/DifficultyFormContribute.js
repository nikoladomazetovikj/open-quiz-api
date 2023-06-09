import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Form} from "react-bootstrap";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";

const DifficultyFormContribute = ({ onSelectDifficulty }) => {
    const [difficulties, setDifficulties] = useState([]);

    useEffect(() => {
        getDifficulty();
    }, []);

    const getDifficulty = () => {
        Axios.get(`${process.env.BASE_URL}/api/allDifficulties`)
            .then((res) => {
                setDifficulties(res.data.data);
            })
            .catch((error) => {
                console.error('Error fetching difficulties:', error);
            });
    };

    const handleDifficultyChange = (event) => {
        const selectedDifficulty = event.target.value;
        onSelectDifficulty(selectedDifficulty);
    };

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Form.Group controlId="formDifficulty" className="mt-3">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Form.Label>Select Difficulty:</Form.Label>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Form.Control as="select" onChange={handleDifficultyChange}>
                <option value="">-- Select Difficulty --</option>
                {difficulties &&
                    difficulties.map((difficulty) => (
                        <option key={difficulty.id} value={difficulty.id}>
                            {capitalizeFirstLetter(difficulty.name)}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
    );
};

export default DifficultyFormContribute;
