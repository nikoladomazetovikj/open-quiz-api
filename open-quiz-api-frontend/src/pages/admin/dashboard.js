import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminHeader from "@/components/layouts/AdminHeader";
import {useRouter} from "next/router";
import Cookies from "js-cookie";

const Dashboard = () => {
    const router = useRouter();
    const token = Cookies.get("token");

    useEffect(() => {
        // Redirect to /login if token is not present
        if (!token) {
            router.replace("/login");
        }
    }, [token, router]);
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