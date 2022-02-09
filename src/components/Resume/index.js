import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Resume() {
  return (
    <Container>
      <h1>Skills</h1>
        <h2>Front end:</h2>
         <p>JavaScript, React, HTML5, CSS, Styled components.</p>
        <h2>Back end:</h2>
         <p>Node.js, Express.js, MongoDB, Mongoose</p>
        <h2>DevOps:</h2>
         <p>Git, Github, Heroku, React Dev Tools</p>
         <Button variant="outline-dark" href="https://www.linkedin.com/in/zakhar-krutikov-82270654/">LinkedIn</Button> <Button variant="outline-dark" href="https://github.com/zkrutikov">Github</Button>
    </Container>
  );
}

export default Resume;
