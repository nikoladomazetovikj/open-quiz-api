import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import DifficultyForm from '@/components/home/DifficultyForm';
import CategoryFormContribute from '@/components/contribute/CategoryFormContribute';

const AddQuestion = () => {
    const [formData, setFormData] = useState({
        question: '',
        category_id: null,
        difficulty_id: null,
        answer_1: '',
        answer_2: '',
        answer_3: '',
        answer_4: '',
        answer_1_is_true: false,
        answer_2_is_true: false,
        answer_3_is_true: false,
        answer_4_is_true: false,
    });

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setFormData((prevFormData) => ({
            ...prevFormData,
            category_id: category,
        }));
    };

    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setFormData((prevFormData) => ({
            ...prevFormData,
            difficulty_id: difficulty,
        }));
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Selected Category:', selectedCategory);
        console.log('Selected Difficulty:', selectedDifficulty);

        // Send POST request to /api/addQuestion with formData
        fetch('http://127.0.0.1:8000/api/addQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle the response data
            })
            .catch((error) => {
                console.error(error); // Handle any errors
            });
    };

    return (
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title>Add Question</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Please select from the form items
                </Card.Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <CategoryFormContribute onSelectCategory={handleCategorySelect} />
                    <DifficultyForm onSelectDifficulty={handleDifficultySelect} />
                    <Form.Group controlId="answer1" className="mt-3">
                        <Form.Label>Answer 1</Form.Label>
                        <Form.Control
                            type="text"
                            name="answer_1"
                            value={formData.answer_1}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                        <Form.Check
                            type="checkbox"
                            name="answer_1_is_true"
                            label="Is True"
                            checked={formData.answer_1_is_true}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                    </Form.Group>
                    <Form.Group controlId="answer2" className="mt-3">
                        <Form.Label>Answer 2</Form.Label>
                        <Form.Control
                            type="text"
                            name="answer_2"
                            value={formData.answer_2}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                        <Form.Check
                            type="checkbox"
                            name="answer_2_is_true"
                            label="Is True"
                            checked={formData.answer_2_is_true}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                    </Form.Group>
                    <Form.Group controlId="answer3" className="mt-3">
                        <Form.Label>Answer 3</Form.Label>
                        <Form.Control
                            type="text"
                            name="answer_3"
                            value={formData.answer_3}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                        <Form.Check
                            type="checkbox"
                            name="answer_3_is_true"
                            label="Is True"
                            checked={formData.answer_3_is_true}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                    </Form.Group>
                    <Form.Group controlId="answer4" className="mt-3">
                        <Form.Label>Answer 4</Form.Label>
                        <Form.Control
                            type="text"
                            name="answer_4"
                            value={formData.answer_4}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                        <Form.Check
                            type="checkbox"
                            name="answer_4_is_true"
                            label="Is True"
                            checked={formData.answer_4_is_true}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                    </Form.Group>
                    {/* Add other form fields for category_id, difficulty_id, answer_* and answer_*_is_true */}
                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddQuestion;
