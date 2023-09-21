import React, { useEffect, useRef } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPageData } from "../store/dataSlice";

// InfiniteScroll component to enable infinite scrolling functionality
const InfiniteScroll = () => {
  // Redux hooks to dispatch actions and read state
  const dispatch = useDispatch();

  // useRef hook to get a reference to the loading spinner
  const loadingRef = useRef();

  // Getting necessary pieces of state from the Redux store
  const dataQuery = useSelector((state) => state.launchesData.dataQuery);
  const isNextPage = useSelector(
    (state) => state.launchesData.uiStatus.nextPage
  );
  const isNextPageLoading = useSelector(
    (state) => state.launchesData.uiStatus.nextPageLoading
  );

  // useEffect hook to set up and clean up IntersectionObserver
  useEffect(() => {
    // Conditionally attaching an IntersectionObserver to the loading spinner
    if (loadingRef.current && isNextPage && !isNextPageLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting && !isNextPageLoading) {
            // Trigger fetching the next page when spinner becomes visible
            dispatch(fetchNextPageData(dataQuery));
          }
        },
        {
          threshold: 1,
        }
      );

      observer.observe(loadingRef.current);

      // Cleanup function to disconnect the observer
      return () => {
        observer.disconnect();
      };
    }
  }, [dispatch, dataQuery, isNextPage, isNextPageLoading]);

  // Main rendering of InfiniteScroll component
  return (
    <Row className="justify-content-center my-4">
      <Col xs={12} md={4} className="text-center">
        {/* Loading spinner container, ref attached for IntersectionObserver */}
        <div ref={loadingRef}>
          {isNextPageLoading && <Spinner animation="border" variant="dark" />}
        </div>
      </Col>
    </Row>
  );
};

export default InfiniteScroll;
