import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import CategoryFormContribute from '@/components/contribute/CategoryFormContribute';
import DifficultyFormContribute from "@/components/contribute/DifficultyFormContribute";
import axios from "axios";

const AddQuestionAdmin = () => {
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
    const [fieldErrors, setFieldErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

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

        if (type === 'checkbox') {
            const updatedFormData = { ...formData };
            // Set all answer_*_is_true properties to false
            Object.keys(updatedFormData).forEach((key) => {
                if (key.startsWith('answer_') && key.endsWith('_is_true')) {
                    updatedFormData[key] = false;
                }
            });
            // Set the selected checkbox to true
            updatedFormData[name] = inputValue;
            setFormData(updatedFormData);
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: inputValue,
            }));
        }
        setFieldErrors((prevFieldErrors) => ({
            ...prevFieldErrors,
            [name]: null,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (!formData.question) {
            errors.question = 'Question is required';
        }

        if (!formData.answer_1) {
            errors.answer_1 = 'Answer 1 is required';
        }
        if (!formData.answer_2) {
            errors.answer_2 = 'Answer 2 is required';
        }
        if (!formData.answer_3) {
            errors.answer_3 = 'Answer 3 is required';
        }
        if (!formData.answer_4) {
            errors.answer_4 = 'Answer 4 is required';
        }

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        // Send POST request to /api/addQuestion with formData
        axios
            .post('http://127.0.0.1:8000/api/questions', formData, config)
            .then((response) => {
                setFormData({
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
                setFieldErrors({});
                setSuccessMessage('Question added successfully');
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred while adding the question.');
            });
    };

    const isSubmitDisabled = !selectedCategory || !selectedDifficulty;

    return (
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title>Add Question</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Please select from the form items
                </Card.Subtitle>
                {successMessage && <Alert variant="success">{successMessage}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleInputChange}
                            required
                            isInvalid={!!fieldErrors.question}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fieldErrors.question}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <CategoryFormContribute onSelectCategory={handleCategorySelect} />
                    <DifficultyFormContribute onSelectDifficulty={handleDifficultySelect} />
                    <Form.Group controlId="answer1" className="mt-3">
                        <Form.Label>Answer 1</Form.Label>
                        <Form.Control
                            type="text"
                            name="answer_1"
                            value={formData.answer_1}
                            onChange={handleInputChange}
                            required
                            isInvalid={!!fieldErrors.answer_1}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fieldErrors.answer_1}
                        </Form.Control.Feedback>
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
                            required
                            isInvalid={!!fieldErrors.answer_2}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fieldErrors.answer_2}
                        </Form.Control.Feedback>
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
                            required
                            isInvalid={!!fieldErrors.answer_3}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fieldErrors.answer_3}
                        </Form.Control.Feedback>
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
                            required
                            isInvalid={!!fieldErrors.answer_4}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fieldErrors.answer_4}
                        </Form.Control.Feedback>
                        <Form.Check
                            type="checkbox"
                            name="answer_4_is_true"
                            label="Is True"
                            checked={formData.answer_4_is_true}
                            onChange={handleInputChange}
                            className="mt-3"
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-3"
                        disabled={isSubmitDisabled}
                    >
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddQuestionAdmin;
