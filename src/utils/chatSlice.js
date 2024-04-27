import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      // to remove messages after certain range not to explode the page
      state.messages.splice(25, 2);
      // unshift is used to push the recent message to 0th index in an array
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;
