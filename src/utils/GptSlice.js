import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearchView: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { toggleGptSearch } = GptSlice.actions;

export default GptSlice.reducer;
