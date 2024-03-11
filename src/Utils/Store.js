import AppSlice from "./AppSlice";

import { configureStore } from "@reduxjs/toolkit";
import SearchResultSlice from "./SearchResultSlice";
import ButtonListMsg from "./ButtonListMsg";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    app: AppSlice,
    searchResults: SearchResultSlice,
    message: ButtonListMsg,
    chat: ChatSlice,
  },
});

export default store;
