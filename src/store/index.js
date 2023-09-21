import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

// Configuring and exporting the Redux store
export default configureStore({
  // Setting up the reducer mapping
  // The 'launchesData' state will be managed by 'dataSlice'
  reducer: {
    launchesData: dataSlice,
  },
});
