import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid="md">
        <Navbar.Brand href="/home">Zak K.</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/aboutme">
            <Link to="/aboutme"></Link>About Me
          </Nav.Link>
          <Nav.Link href="/portfolio">
            <Link to="/portfolio"></Link>Portfolio
          </Nav.Link>
          <Nav.Link href="/resume">
            <Link to="/resume"></Link>Resume
          </Nav.Link>
          <Nav.Link href="/contact">
            <Link to="/contact"></Link>Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
