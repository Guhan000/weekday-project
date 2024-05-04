import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Action
export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 30,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
  const data = await response.json();
  return data;
});

const jobsSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: false,
    data: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchJobs.rejected , (state, action) => {
        console.log('Error', action.payload);
        state.isError = true;
    })
  }
});

export default jobsSlice.reducer;
