import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useEffect, useRef } from "react";
import { langDefaultAction } from "../utils/configSlice";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addMovies } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const config = useSelector((store) => store.config.changeLanguage);
  const gptInputValue = useRef(null);

  useEffect(() => {
    dispatch(langDefaultAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchClick = async () => {
    // const gptQuery =
    //   "Act like movie recommendation system and suggest top 5 movies :" +
    //   gptInputValue.current.value + "give me only movie names like examples ahead. Guntur kaaram, Titanic, Parugu, RRR, Rangasthalam";
    // const gptSearchResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptInputValue.current.value }],
    //   model: "gpt-3.5-turbo",
    // });

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        gptInputValue.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    const movieList = json.results;
    dispatch(addMovies(movieList));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-2 col-span-9"
          ref={gptInputValue}
          placeholder={lang[config]?.gptSearchLabel}
        />
        <button
          className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[config]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
