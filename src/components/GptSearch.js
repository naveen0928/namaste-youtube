import { DASHBOARD_BG } from "../utils/Constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={DASHBOARD_BG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
