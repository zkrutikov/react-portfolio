import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "../LandingPage";
import About from "../About";
import Resume from "../Resume";
import Projects from "../Projects";
import Contact from "../Contact";

function Main() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid="md">
        <Navbar.Brand href="#home">Zak K.</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="/contact">
            <Link to="/contact"></Link>Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Main;
