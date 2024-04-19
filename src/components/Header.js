import { HEADER_LOGO, LANGUAGE_IDENTIFIERS } from "../utils/Constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { toggleGptSearch } from "../utils/GptSlice";
import { changeLanguageAction } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showLangSelect = useSelector((store) => store.gpt.showGptSearchView);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguageAction(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // called when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={HEADER_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex">
          {showLangSelect && (
            <select className="p-2 m-4 bg-gray-500" onChange={handleLangChange}>
              {LANGUAGE_IDENTIFIERS.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="bg-red-700 py-0 px-4 mx-2 my-4 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showLangSelect ? "Home" : "Gpt Search"}
          </button>
          <img
            className="w-12 h-12 mt-3 rounded-full"
            alt="img-icon"
            src={user?.photoURL}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
