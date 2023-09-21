// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueriedData } from "../store/dataSlice";

// ErrorBtn component displays a button that allows users to re-fetch data in case of a network error
const ErrorBtn = () => {
  // Using Redux's useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Using Redux's useSelector to get the last query used for fetching data
  const { text, launchStatus, sorting } = useSelector(
    (state) => state.launchesData.dataQuery
  );

  // Main rendering of ErrorBtn component
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          {/* Button that dispatches the fetchQueriedData action to re-fetch data when clicked */}
          <Button
            variant="danger"
            onClick={() =>
              dispatch(fetchQueriedData({ text, launchStatus, sorting }))
            }
          >
            Network error, click to repeat request.
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Exporting ErrorBtn component for use in other parts of the application
export default ErrorBtn;
