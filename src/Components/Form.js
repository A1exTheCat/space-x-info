import React from "react";
import { setName } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, FormControl } from "react-bootstrap";

const Form = () => {
  const dispatch = useDispatch();
  const launchName = useSelector((state) => state.launchesData.dataQuery.name);
  return (
    <Row className="my-4">
      <Col>
        <FormControl
          type="text"
          placeholder="Search by name"
          value={launchName}
          onChange={(e) => dispatch(setName(e.currentTarget.value))}
        />
      </Col>
    </Row>
  );
};

export default Form;
