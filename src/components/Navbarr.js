import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

const Navbarr = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CheckPoint_Hooks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">List Of Movies</Nav.Link>
            <Nav.Link href="#features">Add Movies</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
