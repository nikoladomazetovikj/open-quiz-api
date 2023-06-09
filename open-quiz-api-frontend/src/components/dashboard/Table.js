import React from 'react';
import {Table, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {approveQuestion} from "@/pages/admin/approve";

class TableComponent extends React.Component {

    state = {
        data: [],
        links: null,
        successMessage: null,
    };


    handleApproveClick = async (questionId) => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );

        try {
            await approveQuestion(questionId, token);
            this.fetchData(); // Refresh the data after successful approval
            this.setState({ successMessage: 'Question approved successfully' });
        } catch (error) {
            // Handle error or display error message here
        }
    };

    handleDeleteClick = async (questionId) => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );

        try {
            await approveQuestion(questionId, token); // Call the separate function
            this.fetchData(); // Refresh the data after successful approval
            this.setState({ successMessage: 'Question deleted successfully' });
        } catch (error) {
            // Handle error or display error message here
        }
    };


    dismissAlert = () => {
        this.setState({ successMessage: null });
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = (url) => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios
            .get(url || `${process.env.BASE_URL}/api/questions/all/all`, config)
            .then((response) => {
                const { data, links } = response.data;
                this.setState({ data, links });
            })
            .catch((error) => {

            });
    };

    handlePrevClick = () => {
        const { links } = this.state;
        if (links && links.prev) {
            this.fetchData(links.prev);
        }
    };

    handleNextClick = () => {
        const { links } = this.state;
        if (links && links.next) {
            this.fetchData(links.next);
        }
    };

    render() {
        const { data, links, successMessage  } = this.state;

        return (
            <>
                {successMessage && (
                    <Alert variant="success" onClose={this.dismissAlert} dismissible>
                        {successMessage}
                    </Alert>
                )}
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Category</th>
                        <th>Difficulty</th>
                        <th>Answers</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(question => (
                        <tr key={question.id}>
                            <td>{question.question}</td>
                            <td>{capitalizeFirstLetter(question.category)}</td>
                            <td>{capitalizeFirstLetter(question.difficulty)}</td>
                            <td>
                                <ul>
                                    {question.answers.map(answer => (
                                        <li
                                            key={answer.id}
                                            style={{
                                                color:
                                                    answer.correct_answer ===
                                                    question.answers[0].correct_answer
                                                        ? 'green'
                                                        : 'red',
                                            }}
                                        >
                                            {answer.correct_answer}
                                        </li>
                                    ))}
                                    {question.answers.map(answer =>
                                        answer.incorrect_answers.map(incorrectAnswer => (
                                            <li
                                                key={incorrectAnswer}
                                                style={{
                                                    color:
                                                        incorrectAnswer ===
                                                        question.answers[0].correct_answer
                                                            ? 'green'
                                                            : 'red',
                                                }}
                                            >
                                                {incorrectAnswer}
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </td>
                            <td>
                                <Button variant="success"
                                        onClick={() => this.handleApproveClick(question.id)}>Approve</Button>
                            </td>
                            <td>
                                <Button variant="danger"
                                        onClick={() => this.handleDeleteClick(question.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <div className="pagination">
                    {links && (
                        <div className="pagination">
                            {links.prev && (
                                <Button variant="secondary" onClick={this.handlePrevClick}>
                                    Previous
                                </Button>
                            )}

                            {links.next && (
                                <Button variant="secondary" onClick={this.handleNextClick}>
                                    Next
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default TableComponent;
