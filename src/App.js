import React from "react";
import Form from "./Components/Form";
import DataTable from "./Components/DataTable";
import FilterSortBtn from "./Components/FilterSortBtn";
import MoreButton from "./Components/MoreButton";
import Header from "./Components/Header";
import AppContainer from "./Components/AppContainer";

function App() {
  return (
    <AppContainer>
      <Header />
      <Form />
      <FilterSortBtn />
      <DataTable />
      <MoreButton />
    </AppContainer>
  );
}

export default App;
