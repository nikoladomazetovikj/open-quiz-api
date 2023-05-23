import { Button, Card, Col, Form, Row, Alert } from "react-bootstrap";
import { useState } from "react";
import CategoryForm from "@/components/home/CategoryForm";
import DifficultyForm from "@/components/home/DifficultyForm";
import QuestionSelectForm from "@/components/home/QuestionSelectForm";

const FormGenerate = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [generatedLink, setGeneratedLink] = useState(null);

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

        if (!selectedCategory || !selectedDifficulty || !selectedQuestion) {
            return;
        }

        const link = `http://127.0.0.1:8000/api/quizQuestions/${selectedCategory}/${selectedDifficulty}/${selectedQuestion}`;

        setGeneratedLink(link);
    };

    return (
        <Row className="justify-content-center">
            <Col xs="auto" className="my-3">
                <Card style={{ width: "35rem" }}>
                    <Card.Body>
                        <Card.Title>Generate API</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Please select from the form items
                        </Card.Subtitle>
                        <Form>
                            <CategoryForm onSelectCategory={handleCategorySelect} />
                            <QuestionSelectForm onSelectQuestion={handleQuestionSelect} />
                            <DifficultyForm onSelectDifficulty={handleDifficultySelect} />
                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-3"
                                onClick={handleSubmit}
                                disabled={!selectedCategory || !selectedDifficulty || !selectedQuestion}
                            >
                                Generate Link
                            </Button>
                        </Form>
                        {generatedLink && (
                            <Alert variant="primary" className="mt-3">
                                Generated Link: <a className="text-dark" href={generatedLink}>{generatedLink}</a>
                            </Alert>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FormGenerate;
