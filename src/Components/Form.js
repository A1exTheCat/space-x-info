import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";

const Form = () => {
  return (
    <Row className="my-4">
      <Col>
        <FormControl placeholder="Search by launch name" />
      </Col>
    </Row>
  );
};

export default Form;
