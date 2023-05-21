import React from "React";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const AdminHeader = props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">OPEN QUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/contribute">Add Question</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/admin/logout" className="me-2">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminHeader;