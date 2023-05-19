import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Axios from 'axios';

const FormGenerate  = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        Axios
            .get('http://127.0.0.1:8000/api/allCategories')
            .then((res) => {
                setCategories(res.data.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }

    return (
        <Row className="justify-content-center">
            <Col xs="auto" className="my-3">
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>Generate API</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Please select from the form items</Card.Subtitle>
                        <Form>
                            <Form.Group controlId="formCategory" className="mt-3">
                                <Form.Label>Select Category:</Form.Label>
                                <Form.Control as="select">
                                    <option key="all">All</option>
                                    {categories &&
                                        categories.map((category) => (
                                            <option key={category.id}>{category.name}</option>
                                        ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formNumQuestions" className="mt-3">
                                <Form.Label>Select Number of Questions:</Form.Label>
                                <Form.Control as="select">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formAnyCategory" className="mt-3">
                                <Form.Label>Select Category:</Form.Label>
                                <Form.Control as="select">
                                    <option>Any</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formDifficulty" className="mt-3">
                                <Form.Label>Select Difficulty:</Form.Label>
                                <Form.Control as="select">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Generate Link
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FormGenerate;