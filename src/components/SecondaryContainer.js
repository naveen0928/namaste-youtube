import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-44 relative z-20 pl-8">
        <MovieList title="Now Playing" movies={movies.getNowPlayingMovies} />
        <MovieList title="Trending" movies={movies.trendingMoviesList} />
        <MovieList title="Popular" movies={movies.popularMoviesList} />
        <MovieList title="Upcoming" movies={movies.getUpcomingMoviesList} />
        <MovieList title="Now Playing" movies={movies.getNowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
