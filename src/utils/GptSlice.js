import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearchView: false,
    searchMovies: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});

export const { toggleGptSearch, addMovies } = GptSlice.actions;

export default GptSlice.reducer;
