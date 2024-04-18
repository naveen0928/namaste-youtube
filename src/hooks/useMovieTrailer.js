import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { getTrailerVideo } from "../utils/NowPlayingMoviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];
    dispatch(getTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
