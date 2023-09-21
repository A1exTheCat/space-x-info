import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueriedData } from "../store/dataSlice";

const ErrorBtn = () => {
  const dispatch = useDispatch();
  const dataQuery = useSelector((state) => state.launchesData.dataQuery);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Button
            className=""
            variant="danger"
            onClick={() => dispatch(fetchQueriedData(dataQuery))}
          >
            Network error, click to repeat request.
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorBtn;
