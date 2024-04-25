import { useDispatch } from "react-redux";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/Constants";
import { toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

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
        <input
          className="border border-gray-400 w-3/4 rounded-l-full p-2"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full py-2 px-3 bg-gray-300">
          🔍
        </button>
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
