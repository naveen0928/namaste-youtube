import { createSlice } from "@reduxjs/toolkit";

const NowPlayingMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
    addTrailerVideo: null,
  },
  reducers: {
    getMovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
    getTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
  },
});

export const { getMovies, getTrailerVideo } = NowPlayingMoviesSlice.actions;

export default NowPlayingMoviesSlice.reducer;
