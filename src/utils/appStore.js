import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import NowPlayingMoviesSlice from "./NowPlayingMoviesSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: NowPlayingMoviesSlice,
  },
});

export default appStore;
