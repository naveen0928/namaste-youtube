import { useState } from "react";
import { DASHBOARD_BG } from "../utils/Constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={DASHBOARD_BG} alt="logo" />
      </div>
      <form className="absolute w-3/12 bg-black my-40 mx-auto right-0 left-0 p-4 bg-opacity-70  rounded-sm">
        <h1 className="font-extrabold text-white py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 w-full bg-gray-700 rounded-sm text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full text-white bg-gray-700 rounded-sm"
        />
        <button className="bg-red-700 p-3 my-3 w-full rounded-sm">
          Submit
        </button>
        <br />
        <br />
        <div className="flex">
          <div className="text-gray-400">
            {isSignInForm ? "New to Netflix?" : "Already a registered user!"}
            &#160;
          </div>
          <div
            className="font-bold text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In"}.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
