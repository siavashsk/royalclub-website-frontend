import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookie from "js-cookie";
import { IAuth } from "services/types/auth";

const initialState = {
  token: Cookie.get("token") || null,
  isLogged: !!Cookie.get("token"),
  expirationTime: Cookie.get("expTime") || null,
} as IAuth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      
    },

    login: (state, action) => {
      const { token, expirationTime } = action.payload;
      state.token = token;
      state.expirationTime = expirationTime;
      state.isLogged = !!token;
      Cookie.set("token", token);
      Cookie.set("expTime", expirationTime);
    },
    logout: (state) => {
      state.token = null;
      state.expirationTime = null;
      Cookie.remove("token");
      Cookie.remove("expTime");
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthState = (state: RootState) => state.auth;
