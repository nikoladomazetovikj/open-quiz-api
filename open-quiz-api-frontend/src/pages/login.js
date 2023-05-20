import React from 'react'
import Header from "@/components/layouts/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import LoginForm from "@/components/login/LoginForm";

function Login() {
    return (
        <>
            <Header/>
            <Container>
            <Row className="justify-content-center">
                <Col xs="auto" className="my-5">
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Login