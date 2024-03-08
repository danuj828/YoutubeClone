import AppSlice from "./AppSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
