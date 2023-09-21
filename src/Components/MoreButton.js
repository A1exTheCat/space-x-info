import React from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
//<Spinner animation="border" variant="dark" />
const MoreButton = () => {
  return (
    <Row className="justify-content-center my-4">
      <Col xs={12} md={4} className="text-center">
        <Button variant="primary" size="lg" className="w-50">
          Show more
        </Button>
      </Col>
    </Row>
  );
};

export default MoreButton;
