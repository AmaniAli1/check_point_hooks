import "./App.css";
import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import ListOfFilms from "./components/ListOfFilms";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
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

      <h1>
        <i>LIST OF MOVIES</i>
      </h1>

      <ListOfFilms></ListOfFilms>
    </div>
  );
}

export default App;
