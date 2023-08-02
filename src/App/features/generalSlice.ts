import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AdminData, Data } from '../types';

const initialState = {
  LoggedInUser: {},
  loadingAdminLogin: false,
  error: '',
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

  // if(response.success){
  //   return response.result;
  // }else{
  //   return response
  // }

  return response.result;
});

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserFromAPI.pending, (state) => {
      state.loadingAdminLogin = true;
    });

    builder.addCase(loginUserFromAPI.fulfilled, (state, action) => {
      console.log('action', action);
      state.LoggedInUser = action.payload;
      state.loadingAdminLogin = false;
    });

    builder.addCase(loginUserFromAPI.rejected, (state, action) => {
      const errmsg = action.error.message || 'Login failed';
      console.log(action, 'err action');
      state.loadingAdminLogin = false;
      state.error = errmsg;
    });
  },
});

export const pendingLogin = (state: any) => state.general.loadingAdminLogin;
export const loginErr = (state: any) => state.general.error;

// export the whole reducer
export default generalSlice.reducer;
