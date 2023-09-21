// Importing utilities from Redux Toolkit and the fetchData API call function
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../http/spacexAPI";

// Initial state of the 'dataSlice' slice of the store
const initialState = {
  data: [], // Array to store the fetched data
  dataQuery: {
    // Object to store query parameters
    text: "",
    launchStatus: "all",
    sorting: "",
    currentPage: 1,
  },
  uiStatus: {
    // Object to manage UI state like loading and error statuses
    isLoading: false,
    isError: false,
    nextPage: false,
    nextPageLoading: false,
  },
};

// Asynchronous action to fetch data based on query parameters
export const fetchQueriedData = createAsyncThunk(
  "data/fetchQueriedData",
  async ({ text, launchStatus, sorting }) => {
    const response = await fetchData(text, launchStatus, sorting);
    return response;
  }
);

// Asynchronous action to fetch next page of data
export const fetchNextPageData = createAsyncThunk(
  "data/fetchNextPageData",
  async (query) => {
    const { text, launchStatus, sorting, currentPage } = query;
    const response = await fetchData(
      text,
      launchStatus,
      sorting,
      currentPage + 1
    );
    return response;
  }
);

// Creating the Redux slice
const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  // Reducers for manipulating state synchronously
  reducers: {
    setLaunchStatus: (state, action) => {
      state.dataQuery.launchStatus = action.payload;
    },
    setSortingStatus: (state, action) => {
      state.dataQuery.sorting = action.payload;
    },
    setText: (state, action) => {
      state.dataQuery.text = action.payload;
    },
  },
  // Reducers for handling asynchronous actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueriedData.pending, (state) => {
        state.uiStatus.isLoading = true;
        state.uiStatus.nextPageLoading = false;
      })
      .addCase(fetchQueriedData.fulfilled, (state, action) => {
        state.uiStatus.isLoading = false;
        state.uiStatus.isError = false;
        state.data = action.payload.docs;
        state.uiStatus.nextPage = action.payload.hasNextPage;
        state.dataQuery.currentPage = 1;
      })
      .addCase(fetchQueriedData.rejected, (state) => {
        state.uiStatus.isError = true;
        state.uiStatus.isLoading = false;
      })
      .addCase(fetchNextPageData.pending, (state) => {
        state.uiStatus.nextPageLoading = true;
      })
      .addCase(fetchNextPageData.fulfilled, (state, action) => {
        state.uiStatus.nextPageLoading = false;
        state.uiStatus.isError = false;
        state.dataQuery.currentPage += 1;
        state.data = state.data.concat(action.payload.docs);
        state.uiStatus.nextPage = action.payload.hasNextPage;
      })
      .addCase(fetchNextPageData.rejected, (state) => {
        state.uiStatus.isError = true;
      });
  },
});

// Exporting actions and the reducer
export const { setLaunchStatus, setSortingStatus, setText } = dataSlice.actions;
export default dataSlice.reducer;
