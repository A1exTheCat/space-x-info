import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../http/spacexAPI";

const initialState = {
  data: [],
  dataQuery: {
    name: "",
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
  async ({ name, launchStatus, sorting }) => {
    const response = await fetchData(name, launchStatus, sorting);
    return response;
  }
);

export const fetchNextPageData = createAsyncThunk(
  "data/fetchNextPageData",
  async (query) => {
    const { name, launchStatus, sorting, currentPage } = query;
    const response = await fetchData(
      name,
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
    setName: (state, action) => {
      state.dataQuery.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueriedData.pending, (state) => {
        state.uiStatus.isLoading = true;
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
        state.uiStatus.nextPageLoading = false;
      });
  },
});

export const { setLaunchStatus, setSortingStatus, setName } = dataSlice.actions;

export default dataSlice.reducer;
