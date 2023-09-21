import React, { useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueriedData } from "../store/dataSlice";

const DataTable = () => {
  const dispatch = useDispatch();
  const dataQuery = useSelector((state) => state.launchesData.dataQuery);

  useEffect(() => {
    dispatch(fetchQueriedData(dataQuery));
  }, [dataQuery, dispatch]);

  return (
    <Row className="mt-4">
      <Col>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>Number</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Launch Date</th>
              <th>Details</th>
              <th>Article</th>
              <th>Wiki</th>
            </tr>
          </thead>
          <tbody>{/* Место для строк таблицы */}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default DataTable;
