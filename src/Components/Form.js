import React from "react";
import { setText } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormControl } from "react-bootstrap";

// Form component for performing text-based searches
const Form = () => {
  // Redux hooks to dispatch actions and read state
  const dispatch = useDispatch();

  // Getting the current search text from Redux state
  const launchName = useSelector((state) => state.launchesData.dataQuery.text);

  // Main rendering of Form component
  return (
    <Row className="my-4">
      <Col>
        {/* Text input field for search */}
        <FormControl
          type="text"
          placeholder="Search..." // Placeholder for the input field
          value={launchName} // Input value is bound to launchName from Redux state
          // On input change, dispatch action to update search text in Redux store
          onChange={(e) => dispatch(setText(e.currentTarget.value))}
        />
      </Col>
    </Row>
  );
};

export default Form;
