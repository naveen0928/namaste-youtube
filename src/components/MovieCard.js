import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-40 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
