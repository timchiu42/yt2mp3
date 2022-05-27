import { configureStore } from "@reduxjs/toolkit";
import inputUrlReducer from "./inputUrl";
import outputUrlReducer from "./outputUrl";

export default configureStore({
  reducer: {
    inputUrl: inputUrlReducer,
    outputUrl: outputUrlReducer,
  },
});
