import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Form} from "react-bootstrap";

const CategoryForm = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        Axios.get('http://127.0.0.1:8000/api/allCategories')
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
                <option key="all" value="all">All</option>
                {categories &&
                    categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
    );
};

export default CategoryForm;
