import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../http/spacexAPI";

const initialState = {
  data: [],
  dataQuery: {
    name: "",
    launchStatus: null,
    sorting: null,
  },
  uiStatus: {
    loading: false,
    page: 1,
  },
};

export const fetchQueriedData = createAsyncThunk(
  "data/fetchQueriedData",
  async (query) => {
    const response = await fetchData(query);
    return response;
  }
);

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,

  reducers: {
    setLoading: (state) => {
      state.uiStatus.loading = !state.uiStatus.loading;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueriedData.pending, (state) => {
        state.uiStatus.loading = true;
      })
      .addCase(fetchQueriedData.fulfilled, (state, action) => {
        state.uiStatus.loading = false;
        state.data = action.payload.docs;
      })
      .addCase(fetchQueriedData.rejected, (state) => {
        state.uiStatus.loading = "error";
      });
  },
});

export const { setLoading, setData } = dataSlice.actions;

export default dataSlice.reducer;
