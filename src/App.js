import React from "react";
import Form from "./Components/Form";
import DataTable from "./Components/DataTable";
import FilterSortBtn from "./Components/FilterSortBtn";
import MoreButton from "./Components/MoreButton";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="mt-4 px-5">
      <Header />
      <Form />
      <FilterSortBtn />
      <DataTable />
      <MoreButton />
    </Container>
  );
}

export default App;
