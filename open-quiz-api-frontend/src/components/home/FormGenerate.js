import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import CategoryForm from "@/components/home/CategoryForm";
import DifficultyForm from "@/components/home/DifficultyForm";
import QuestionSelectForm from "@/components/home/QuestionSelectForm";

const FormGenerate  = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    const handleDifficultySelect = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    const handleQuestionSelect = (question) => {
        setSelectedQuestion(question);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the desired action with the selected category
        console.log('Selected Category:', selectedCategory);
        console.log('Selected Difficulty', selectedDifficulty);
        console.log('Selected Question:', selectedQuestion);

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
                            <QuestionSelectForm onSelectQuestion={handleQuestionSelect} />
                            <DifficultyForm onSelectDifficulty={handleDifficultySelect} />
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