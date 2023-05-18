import {Col, Container, Row} from "react-bootstrap";

const Home = props => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto" className="my-5">
                    <h1>Welcome To Open API Quiz</h1>
                </Col>
            </Row>
        </Container>
    );

};

export default Home;