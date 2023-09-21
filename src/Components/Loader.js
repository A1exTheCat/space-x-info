import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap"; // Bootstrap components

// Loader component to display a loading spinner
const Loader = () => {
  // Main rendering of Loader component
  return (
    <Container
      fluid // Full-width container
      className="d-flex justify-content-center align-items-center vh-100" // Centering styles and setting height to 100% of the viewport
    >
      <Row>
        <Col>
          {/* Bootstrap Spinner component to show loading animation */}
          <Spinner animation="border" variant="dark" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;
