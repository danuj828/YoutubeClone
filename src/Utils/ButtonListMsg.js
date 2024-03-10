import { createSlice } from "@reduxjs/toolkit";

const DisplayMsg = createSlice({
  name: "message",
  initialState: {
    buttons: false,
  },
  reducers: {
    showMsg: (state) => {
      state.buttons = true;
    },
  },
});

export const { showMsg } = DisplayMsg.actions;
export default DisplayMsg.reducer;
