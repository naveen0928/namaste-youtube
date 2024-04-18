import { createSlice } from "@reduxjs/toolkit";

const NowPlayingMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
    addTrailerVideo: null,
    popularMoviesList: null,
    trendingMoviesList: null,
    getUpcomingMoviesList: null,
  },
  reducers: {
    getMovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
    getTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    getPopularMoviesList: (state, action) => {
      state.popularMoviesList = action.payload;
    },
    getTrendingMoviesList: (state, action) => {
      state.trendingMoviesList = action.payload;
    },
    getUpcomingMoviesList: (state, action) => {
      state.getUpcomingMoviesList = action.payload;
    },
  },
});

export const {
  getMovies,
  getTrailerVideo,
  getPopularMoviesList,
  getTrendingMoviesList,
  getUpcomingMoviesList,
} = NowPlayingMoviesSlice.actions;

export default NowPlayingMoviesSlice.reducer;
