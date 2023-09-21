import React, { useEffect } from "react";
import Loader from "./Loader";
import { Row, Col, Table, Badge, NavLink, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueriedData } from "../store/dataSlice";
import { dateConvertor } from "../utils/dateConvertor";
import ErrorBtn from "./ErrorBtn";
import noPicture from "../assets/pictures/noPicture.svg";

const DataTable = () => {
  const dispatch = useDispatch();
  const { text, launchStatus, sorting } = useSelector(
    (state) => state.launchesData.dataQuery
  );
  const isLoading = useSelector(
    (state) => state.launchesData.uiStatus.isLoading
  );
  const isError = useSelector((state) => state.launchesData.uiStatus.isError);

  useEffect(() => {
    dispatch(fetchQueriedData({ text, launchStatus, sorting }));
  }, [text, launchStatus, sorting, dispatch]);

  const launches = useSelector((state) => state.launchesData.data);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorBtn />;
  }

  if (launches.length === 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <span>Nothing has been found</span>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Row className="mt-4">
      <Col>
        <Table responsive bordered className="text-center align-middle">
          <thead>
            <tr className="text-center align-middle">
              <th>Mission number</th>
              <th>Mission patch</th>
              <th>Mission name</th>
              <th>Launch Date</th>
              <th>Launch Status</th>
              <th>Details</th>
              <th>Article</th>
              <th>Wiki</th>
            </tr>
          </thead>
          <tbody>
            {launches.map((launch) => {
              const status = launch.success ? "Success" : "Failed";
              return (
                <tr key={launch.id}>
                  <td>{launch.flight_number}</td>
                  <td>
                    <img
                      width={120}
                      height={120}
                      src={
                        launch.links.patch.small
                          ? launch.links.patch.small
                          : noPicture
                      }
                      alt="Patch is absent"
                    />
                  </td>
                  <td>{launch.name}</td>
                  <td>{dateConvertor(launch.date_utc)}</td>
                  <td>{launch.upcoming ? "Upcoming" : status}</td>
                  <td>
                    {launch.details
                      ? launch.details
                      : "There is no additional information"}
                  </td>
                  <td>
                    {launch.links.article ? (
                      <Badge bg="dark p-2">
                        <NavLink href={launch.links.article} target="_blank">
                          Link
                        </NavLink>
                      </Badge>
                    ) : null}
                  </td>
                  <td>
                    {launch.links.wikipedia ? (
                      <Badge bg="primary p-2">
                        <NavLink href={launch.links.wikipedia} target="_blank">
                          Wiki
                        </NavLink>
                      </Badge>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default DataTable;
