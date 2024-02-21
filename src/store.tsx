import { configureStore } from "@reduxjs/toolkit";
// reducers
import drumReducer from "./components/DrumMachine/drumReducer";

const store = configureStore({
  reducer: {
    drumReducer: drumReducer,
  },
});

export default store;
