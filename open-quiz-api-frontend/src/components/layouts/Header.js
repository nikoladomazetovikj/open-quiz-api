import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">OPEN QUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/contribute">Contribute</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" className="me-2">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;