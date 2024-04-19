import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useEffect } from "react";
import { langDefaultAction } from "../utils/configSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const config = useSelector((store) => store.config.changeLanguage);

  useEffect(() => {
    dispatch(langDefaultAction());
  }, []);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-2 m-2 col-span-9"
          placeholder={lang[config]?.gptSearchLabel}
        />
        <button className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[config]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
