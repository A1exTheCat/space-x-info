import React from "react";
import { Container } from "react-bootstrap";

const AppContainer = ({ children }) => {
  return (
    <Container fluid className="mt-4 px-5">
      {children}
    </Container>
  );
};

export default AppContainer;
