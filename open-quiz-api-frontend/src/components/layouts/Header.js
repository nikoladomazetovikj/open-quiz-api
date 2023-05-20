import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";

const Header = () => {
    const token = Cookies.get("token");

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">OPEN QUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!token && <Nav.Link href="/">Home</Nav.Link>}
                        {!token && <Nav.Link href="/contribute">Contribute</Nav.Link>}
                    </Nav>
                    <Nav>
                        {token ? (
                            <>
                                <Nav.Link href="/dashboard" className="me-2">Dashboard</Nav.Link>
                                <Nav.Link href="/logout" className="me-2">Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href="/login" className="me-2">Login</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
