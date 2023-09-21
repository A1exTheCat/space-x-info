import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainPic from "../assets/pictures/mainPic.jpg";

// Header component to display the main title and image
const Header = () => {
  // Main rendering of Header component
  return (
    <>
      {/* Row for displaying the main title */}
      <Row>
        <Col className="text-center">
          <h1>SpaceX Launches Information</h1> {/* Main title */}
        </Col>
      </Row>

      {/* Row for displaying the main picture */}
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          {/* Image component from Bootstrap, showing the main picture */}
          <Image src={mainPic} width="600" height="600" rounded fluid />
        </Col>
      </Row>
    </>
  );
};

export default Header;
