import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface ITicket {
  delay: any;
  isExpired: boolean;
}

const initialState: ITicket = {
  delay: Cookies.get("ticketExpTime") || null,
  isExpired: !!Cookies.get("ticketExpTime"),
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    add: (state, action) => {
      const { delay } = action.payload;
      state.delay = delay;
      state.isExpired = !!delay;
      Cookies.set("ticketExpTime", delay);
      console.log("ticket Added");
    },
    remove: (state) => {
      state.delay = null;
      state.isExpired = false;
      Cookies.remove("ticketExpTime");
      console.log("ticket Removed");
    },
  },
});

export const { add, remove } = ticketSlice.actions;

export default ticketSlice.reducer;
