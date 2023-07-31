import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  LoggedInUser: {},
};

const loginUserFromAPI = createAsyncThunk('general/loginuser', async (username, password) => {
  const url = 'http://localhost:7001/admin/login';

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  }).then((response) => response.json());

  return response.result;
});

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
  extraReducers: {
    // [loginUserFromAPI.fulfilled]: (state, action) => {
    // },
  },
});

// export the whole reducer
export default generalSlice.reducer;
