import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Form} from "react-bootstrap";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";

const CategoryFormContribute = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        Axios.get(`${process.env.BASE_URL}/api/allCategories`)
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        onSelectCategory(selectedCategory);
    };

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Form.Group controlId="formCategory" className="mt-3">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Form.Label>Select Category:</Form.Label>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Form.Control as="select" onChange={handleCategoryChange}>
                <option value="">-- Select Category --</option>
                {categories &&
                    categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {capitalizeFirstLetter(category.name)}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
    );
};

export default CategoryFormContribute;
