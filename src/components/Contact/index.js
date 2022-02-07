import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={5}>
          <h1>Contact Me</h1>
          <Form>
            <Form.Group
              className="mb-3"
              name="name"
              controlId="exampleForm.ControlInput1"
              onBlur={handleChange}
            >
              <Form.Label>Name:</Form.Label>
              <Form.Control type="name" placeholder="" />
            </Form.Group>
            <Form.Group
              onBlur={handleChange}
              className="mb-3"
              name="email"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control
                onBlur={handleChange}
                name="message"
                type="message"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            {errorMessage && (
              <Container>
                <p className="error-text">{errorMessage}</p>
              </Container>
            )}
            <Button onSubmit={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
