import React, { useEffect, useRef } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPageData } from "../store/dataSlice";

const InfiniteScroll = () => {
  const dispatch = useDispatch();
  const loadingRef = useRef();
  const dataQuery = useSelector((state) => state.launchesData.dataQuery);
  const isNextPage = useSelector(
    (state) => state.launchesData.uiStatus.nextPage
  );
  const isNextPageLoading = useSelector(
    (state) => state.launchesData.uiStatus.nextPageLoading
  );

  useEffect(() => {
    if (loadingRef.current && isNextPage && !isNextPageLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting && !isNextPageLoading) {
            dispatch(fetchNextPageData(dataQuery));
          }
        },
        {
          threshold: 1,
        }
      );

      observer.observe(loadingRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [dispatch, dataQuery, isNextPage, isNextPageLoading]);

  return (
    <Row className="justify-content-center my-4">
      <Col xs={12} md={4} className="text-center">
        <div ref={loadingRef}>
          {isNextPageLoading && <Spinner animation="border" variant="dark" />}
        </div>
      </Col>
    </Row>
  );
};

export default InfiniteScroll;
