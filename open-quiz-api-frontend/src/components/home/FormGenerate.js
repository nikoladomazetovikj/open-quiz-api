import {Card, Col, Form, Row} from "react-bootstrap";

const FormGenerate  = () => {
    return (
        <Row className="justify-content-center">
            <Col xs="auto" className="my-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Generate API</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Please select from the form items</Card.Subtitle>
                        <Form>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Select Category:</Form.Label>
                                <Form.Control as="select">
                                    <option>All</option>
                                    <option>Others</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formNumQuestions">
                                <Form.Label>Select Number of Questions:</Form.Label>
                                <Form.Control as="select">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formAnyCategory">
                                <Form.Label>Select Category:</Form.Label>
                                <Form.Control as="select">
                                    <option>Any</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formDifficulty">
                                <Form.Label>Select Difficulty:</Form.Label>
                                <Form.Control as="select">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FormGenerate;