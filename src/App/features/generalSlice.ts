import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AdminData, Data } from '../types';

const initialState = {
  LoggedInUser: {},
  loadingAdminLogin: false,
};

// type initialStateType = typeof initialState;

export const loginUserFromAPI = createAsyncThunk('general/loginuser', async (data: Data): Promise<AdminData> => {
  const url = 'http://localhost:7001/admin/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: data.username, password: data.password }),
  }).then((response) => response.json());

  return response.result;
});

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserFromAPI.pending, (state, action) => {
      state.loadingAdminLogin = true;
    });

    builder.addCase(loginUserFromAPI.fulfilled, (state, action) => {
      console.log('action', action);
      state.LoggedInUser = action.payload;
      state.loadingAdminLogin = false;
    });
  },
});

export const pendingLogin = (state: any) => state.general.loadingAdminLogin;

// export the whole reducer
export default generalSlice.reducer;
