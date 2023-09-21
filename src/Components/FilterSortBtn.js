import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLaunchStatus, setSortingStatus } from "../store/dataSlice";
import { Row, Col, ButtonGroup, ToggleButton, Dropdown } from "react-bootstrap";
import { statusButtons, sortBtn } from "../utils/consts";

const FilterSortBtn = () => {
  const dispatch = useDispatch();
  const launchStatus = useSelector(
    (state) => state.launchesData.dataQuery.launchStatus
  );
  const sortingStatus = useSelector(
    (state) => state.launchesData.dataQuery.sorting
  );

  return (
    <Row className="my-4 justify-content-between">
      <Col className="my-1" md="auto">
        <ButtonGroup>
          {statusButtons.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-secondary"
              name="radio"
              value={radio.value}
              checked={launchStatus === radio.value}
              onChange={(e) => dispatch(setLaunchStatus(e.currentTarget.value))}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Col>
      <Col className="my-1" md="auto">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sorting
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sortBtn.map((btn, idx) => (
              <Dropdown.Item
                key={idx}
                id={`radio-${idx}`}
                value={btn.value}
                active={btn.value === sortingStatus}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setSortingStatus(btn.value));
                }}
              >
                {btn.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default FilterSortBtn;
