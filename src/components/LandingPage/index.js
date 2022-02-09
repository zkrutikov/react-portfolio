import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import landing from '../../assets/video/landing.mp4';

function LandingPage() {
  return (
    <div>
      <video loop autoPlay muted id='video'>
        <source
          src={landing}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Row className="justify-content-md-center">
      <Col xs={12} sm={4} md={4}>
      <h1>Hey there!</h1>
    </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
