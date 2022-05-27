import { config } from "../config/config.js";
import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

export const outputUrlSlice = createSlice({
  name: "output urls from server",
  initialState: {
    outputs: [],
    isSending: false,
  },
  reducers: {
    setIsSending: (state, action) => {
      state.isSending = action.payload;
    },
    setOutputs: (state, action) => {
      state.outputs = action.payload;
    },
  },
});

export const { setIsSending, setOutputs } = outputUrlSlice.actions;
export default outputUrlSlice.reducer;
