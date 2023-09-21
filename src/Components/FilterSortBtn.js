import React, { useState } from "react";
import {
  Row,
  Col,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

const FilterSortBtn = () => {
  const [showSortingButtons, setShowSortingButtons] = useState(true);
  return (
    <Row className="my-4 justify-content-between">
      <Col className="my-1" md="auto">
        <ButtonGroup>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-danger">Failed</Button>
          <Button variant="outline-warning">Upcoming</Button>
        </ButtonGroup>
      </Col>
      <Col className="my-1" md="auto">
        <DropdownButton
          id="dropdown-sorting"
          title="Sort"
          onSelect={() => setShowSortingButtons(!showSortingButtons)}
        >
          {showSortingButtons && (
            <>
              <Dropdown.Item eventKey="1">
                Launch date (New first)
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                Launch date (Old first)
              </Dropdown.Item>
              <Dropdown.Item eventKey="3">Name (A...Z)</Dropdown.Item>
              <Dropdown.Item eventKey="3">Name (Z...A)</Dropdown.Item>
            </>
          )}
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default FilterSortBtn;
