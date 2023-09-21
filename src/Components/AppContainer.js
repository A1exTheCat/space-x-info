import React from "react";
import { Container } from "react-bootstrap";

// AppContainer component serves as a layout wrapper for the application
const AppContainer = ({ children }) => {
  return (
    // Using React-Bootstrap's Container with fluid layout and custom classes
    <Container fluid className="mt-4 px-5">
      {children} {/* Rendering child components passed in as props */}
    </Container>
  );
};

export default AppContainer;
