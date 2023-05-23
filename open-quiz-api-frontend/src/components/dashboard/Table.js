import React from 'react';
import {Table, Button, Pagination} from 'react-bootstrap';
import axios from 'axios';

class TableComponent extends React.Component {
    state = {
        data: [],
        links: null,
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
            .get(url || 'http://127.0.0.1:8000/api/questions/all/all', config)
            .then((response) => {
                const { data, links } = response.data;
                this.setState({ data, links });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    handlePageChange = (page) => {
        const { links } = this.state;
        if (links && links.links) {
            const url = links.links.find((link) => link.label === page)?.url;
            if (url) {
                this.fetchData(url);
            }

            console.log(links)
        }
    };

    render() {
        const { data, links } = this.state;

        return (
            <>
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
                                <Button variant="success">Approve</Button>
                            </td>
                            <td>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <div className="pagination">

                </div>
            </>
        );
    }
}

export default TableComponent;
