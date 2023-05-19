import {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

const QuestionSelectForm = ({ onSelectQuestion }) => {
    const handleQuestionChange = (event) => {
        const selectedQuestion = event.target.value;
        onSelectQuestion(selectedQuestion);
    };

    return (
        <Form.Group controlId="formNumQuestions" className="mt-3">
            <Form.Label>Select Number of Questions:</Form.Label>
            <Form.Control as="select" onChange={handleQuestionChange}>
                <option value="">-- Select Question --</option>
                <option key="5" value="5">
                    5
                </option>
                <option key="10" value="10">
                    10
                </option>
                <option key="15" value="15">
                    15
                </option>
                <option key="20" value="20">
                    20
                </option>
            </Form.Control>
        </Form.Group>
    );
};


export default QuestionSelectForm;