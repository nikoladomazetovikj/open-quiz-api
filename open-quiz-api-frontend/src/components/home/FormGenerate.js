import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import CategoryForm from "@/components/home/CategoryForm";

const FormGenerate  = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the desired action with the selected category
        console.log('Selected Category:', selectedCategory);

        // Reset the selected category
        setSelectedCategory('');
    };

    return (
        <Row className="justify-content-center">
            <Col xs="auto" className="my-3">
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title>Generate API</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Please select from the form items</Card.Subtitle>
                        <Form>
                            <CategoryForm onSelectCategory={handleCategorySelect} />
                            <Form.Group controlId="formNumQuestions" className="mt-3">
                                <Form.Label>Select Number of Questions:</Form.Label>
                                <Form.Control as="select">
                                    <option key="5">5</option>
                                    <option key="10">10</option>
                                    <option key="15">15</option>
                                    <option key="20">20</option>
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
                            <Button variant="primary" type="submit" className="mt-3" onClick={handleSubmit}>
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