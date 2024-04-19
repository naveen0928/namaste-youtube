import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import NowPlayingMoviesSlice from "./NowPlayingMoviesSlice";
import GptSlice from "./GptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: NowPlayingMoviesSlice,
    gpt: GptSlice,
    config: configSlice,
  },
});

export default appStore;
