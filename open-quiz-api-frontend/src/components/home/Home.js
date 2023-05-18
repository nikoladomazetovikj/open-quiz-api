import {Card, Col, Container, Row} from "react-bootstrap";
import FormGenerate from "@/components/home/FormGenerate";

const Home = props => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto" className="my-5">
                    <h1>Welcome To Open API Quiz</h1>
                </Col>
            </Row>
            <FormGenerate/>
        </Container>
    );

};

export default Home;