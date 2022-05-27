import { createSlice } from "@reduxjs/toolkit";

export const inputUrlSlice = createSlice({
  name: "input url",
  initialState: {
    inputUrl: "",
    urls: [],
  },
  reducers: {
    editInputUrl: (state, action) => {
      state.inputUrl = action.payload;
    },
    addUrl: (state) => {
      if (state.inputUrl !== "" && state.urls.length < 5) {
        state.urls.push(state.inputUrl);
        state.inputUrl = "";
      }
    },
    removeUrl: (state, action) => {
      let urlIndex = action.payload;
      state.urls.splice(urlIndex, 1);
    },
    clearUrl: (state) => {
      state.urls = [];
    },
  },
});

export const { editInputUrl, addUrl, removeUrl, clearUrl } =
  inputUrlSlice.actions;
export default inputUrlSlice.reducer;
