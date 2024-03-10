import AppSlice from "./AppSlice";

import { configureStore } from "@reduxjs/toolkit";
import SearchResultSlice from "./SearchResultSlice";
import ButtonListMsg from "./ButtonListMsg";

const store = configureStore({
  reducer: {
    app: AppSlice,
    searchResults: SearchResultSlice,
    message: ButtonListMsg,
  },
});

export default store;
