import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import mainPic from "../assets/pictures/mainPic.jpg";

const Header = () => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>SpaceX Launches Information</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          <Image src={mainPic} width="600" height="600" rounded fluid />
        </Col>
      </Row>
    </>
  );
};

export default Header;
