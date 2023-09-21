import React from "react";

// Importing custom components used in the App
import Form from "./Components/Form";
import DataTable from "./Components/DataTable";
import FilterSortBtn from "./Components/FilterSortBtn";
import MoreButton from "./Components/MoreButton";
import Header from "./Components/Header";
import AppContainer from "./Components/AppContainer";

// The main App component that serves as the entry point of the application
function App() {
  return (
    // Wrapping all components inside AppContainer for styling or context providers
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
