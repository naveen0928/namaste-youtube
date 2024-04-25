import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar = useSelector((store) => store.app.showSidebar);

  if (!sidebar) return null;

  return (
    <div className="w-44 shadow-2xl h-screen">
      <ul className="p-4 mb-2">
        <li className="pt-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="pt-2">Shorts</li>
        <li className="pt-2">Subscriptions</li>
      </ul>
      <p className="border border-gray-300 mx-2" />
      <ul className="p-4">
        <p className="font-bold">You</p>
        <li className="pt-2">History</li>
        <li className="pt-2">Playlists</li>
        <li className="pt-2">Watch Later</li>
        <li className="pt-2">Liked videos</li>
        <li className="pt-2">Downloads</li>
      </ul>
      <p className="border border-gray-300 mx-2" />
      <ul className="p-4">
        <p className="font-bold">Explore</p>
        <li className="pt-2">Trending</li>
        <li className="pt-2">Shopping</li>
        <li className="pt-2">Music</li>
        <li className="pt-2">Films</li>
        <li className="pt-2">Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
