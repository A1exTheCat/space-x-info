import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../http/spacexAPI";

const initialState = {
  data: [],
  dataQuery: {
    text: "",
    launchStatus: "all",
    sorting: "",
    currentPage: 1,
  },
  uiStatus: {
    isLoading: false,
    isError: false,
    nextPage: false,
    nextPageLoading: false,
  },
};

export const fetchQueriedData = createAsyncThunk(
  "data/fetchQueriedData",
  async ({ text, launchStatus, sorting }) => {
    const response = await fetchData(text, launchStatus, sorting);
    return response;
  }
);

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

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,

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

export const { setLaunchStatus, setSortingStatus, setText } = dataSlice.actions;

export default dataSlice.reducer;
