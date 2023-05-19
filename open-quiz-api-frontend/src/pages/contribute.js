import React from 'react';
import Header from "@/components/layouts/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuestion from "@/components/contribute/AddQuestion";
import {Col, Row} from "react-bootstrap";

const Contribute = () => {
    return (
        <>
            <Header/>
            <Row className="justify-content-center">
                <Col xs="auto" className="my-5">
                    <AddQuestion/>
                </Col>
            </Row>
        </>
    )
};

export default Contribute;