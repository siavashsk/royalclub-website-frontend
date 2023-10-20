import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import ticketSlice from "./tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ticket: ticketSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
