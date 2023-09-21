import React from "react";
import { setText } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormControl } from "react-bootstrap";

const Form = () => {
  const dispatch = useDispatch();
  const launchName = useSelector((state) => state.launchesData.dataQuery.text);
  return (
    <Row className="my-4">
      <Col>
        <FormControl
          type="text"
          placeholder="Search..."
          value={launchName}
          onChange={(e) => dispatch(setText(e.currentTarget.value))}
        />
      </Col>
    </Row>
  );
};

export default Form;
