import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminHeader from "@/components/layouts/AdminHeader";
import useTokenValidation from "@/helpers/useTokenValidation";

const Dashboard = () => {
    useTokenValidation();
    return (
        <>
            <AdminHeader/>
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto" className="my-5">
                        <h1>Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Dashboard;