import { createSlice } from '@reduxjs/toolkit';

import { authApi } from '@/services/modules/auth';
import AuthInfo from '@/types/models/AuthInfo';

const initialState = {
  isLoggedIn: false,
  token: null,
  refreshToken: null,
  currentAuth: null,
} as AuthState;

// Config slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.refreshToken = null;
      state.currentAuth = null;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.isLoggedIn = true;
        state.currentAuth = action.payload;
        state.token = state.currentAuth?.value;
        state.refreshToken = state.currentAuth?.fireBaseToken;
      },
    );
  },
});

export type AuthState = {
  isLoggedIn: boolean;
  token: string | null | undefined;
  refreshToken: string | null | undefined;
  currentAuth: AuthInfo | null;
};

export const { logout } = authSlice.actions;

export const getCurrentAuth = (state: any) => state.auth.currentAuth;

export const getToken = (state: any) => state.auth.token;

export const isLoggedIn = (state: any) => state.auth.isLoggedIn;

export default authSlice.reducer;
