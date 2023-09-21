import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Spinner animation="border" variant="dark" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;
