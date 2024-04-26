import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/Constants";
import { toggleSidebar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/cacheSlice";

const Header = () => {
  const [searQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const cache = useSelector((store) => store.cache);

  useEffect(() => {
    // make an api call only when diff between two strokes is >200ms else DECLINE the call
    const timer = setTimeout(() => {
      if (cache && cache[searQuery]) {
        setSuggestions(cache[searQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // clearing the interval
    return () => {
      clearTimeout(timer);
    };
  }, [searQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache by dispatching an action
    dispatch(
      cacheResults({
        [searQuery]: json[1],
      })
    );
  };

  /**
   *
   * key - i
   *    - render the component
   *    - useEffect
   *    - start timer - make api cal after 200 ms
   * key - ip
   *    - destroy the component (calls useEffect return method) - if key is typed < 200ms
   *    - re-render the component
   *    - useEffect
   *    - start new timer
   *
   *
   * if after 200ms no key is presses - then automatically API is called
   *
   *
   */

  const handleHamburgerClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col shadow-lg m-3">
      <div className="grid-cols-1">
        <div className="flex">
          <div>
            <img
              className="h-12 mt-2 bg-transparent cursor-pointer"
              src={HAMBURGER_ICON}
              alt="Hamburger-icon"
              onClick={handleHamburgerClick}
            />
          </div>
          <a href="/">
            <img
              className="h-16 cursor-pointer"
              src={YOUTUBE_LOGO}
              alt="youtube-logo"
            />
          </a>
        </div>
      </div>
      <div className="p-1 m-1 grid-cols-10">
        <div>
          <input
            className="border border-gray-400 w-3/4 rounded-l-full px-2 py-2"
            placeholder="Search"
            value={searQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onScroll={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full py-2 px-3 bg-gray-300">
            🔍
          </button>
        </div>
        {showSuggestions && searQuery.length > 0 && (
          <div className="absolute bg-white mt-1 border border-gray-200 p-2 rounded-lg w-96 shadow-lg">
            <ul>
              {suggestions.map((item) => (
                <li className="p-1 shadow-sm" key={item}>
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-1 m-1 grid-cols-1 ml-auto">
        <img className="h-10 cursor-pointer" src={USER_ICON} alt="uer-icon" />
      </div>
    </div>
  );
};

export default Header;

// <div className="flex justify-between p-1 shadow-lg">
//   <div className="flex">
//     <img className="h-12 bg-transparent" src={HAMBURGER_ICON} alt="Hamburger-icon" />
//     <img className="h-14" src={YOUTUBE_LOGO} alt="youtube-logo" />
//   </div>
//   <div className="p-2 m-2">
//     <input className="border border-gray-400 w-max rounded-l-full p-2" placeholder="Search" />
//     <button className="border border-gray-400 rounded-r-full p-2 bg-gray-300">🔍</button>
//   </div>
//   <div className="p-1 m-1">
//     <img className="h-10" src={USER_ICON} alt="uer-icon" />
//   </div>
// </div>
