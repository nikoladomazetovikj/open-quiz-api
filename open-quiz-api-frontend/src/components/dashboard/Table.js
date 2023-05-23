import React from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

class TableComponent extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            '$1'
        );

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios
            .get('http://127.0.0.1:8000/api/questions/all/all', config)
            .then(response => {
                this.setState({ data: response.data.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Answers</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map(question => (
                    <tr key={question.id}>
                        <td>{question.question}</td>
                        <td>{question.category}</td>
                        <td>{question.difficulty}</td>
                        <td>
                            <ul>
                                {question.answers.map(answer => (
                                    <li
                                        key={answer.id}
                                        style={{
                                            color:
                                                answer.correct_answer === question.answers[0].correct_answer
                                                    ? 'green'
                                                    : 'red',
                                        }}
                                    >
                                        {answer.correct_answer}
                                    </li>
                                ))}
                                {question.answers.map(answer => (
                                    answer.incorrect_answers.map(incorrectAnswer => (
                                        <li
                                            key={incorrectAnswer}
                                            style={{
                                                color:
                                                    incorrectAnswer === question.answers[0].correct_answer
                                                        ? 'green'
                                                        : 'red',
                                            }}
                                        >
                                            {incorrectAnswer}
                                        </li>
                                    ))
                                ))}
                            </ul>
                        </td>
                        <td>
                            <Button variant="success">Approve</Button>
                        </td>
                        <td>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

export default TableComponent;
