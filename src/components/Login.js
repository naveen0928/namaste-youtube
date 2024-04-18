import { useRef, useState } from "react";
import { DASHBOARD_BG, photoURL } from "../utils/Constants";
import Header from "./Header";
import { validateFormData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [isError, setError] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormSubmit = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setError(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={DASHBOARD_BG} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 bg-black my-36 mx-auto right-0 left-0 p-14 bg-opacity-70 rounded-sm"
      >
        <h1 className="font-extrabold text-white py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded-sm text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 w-full bg-gray-700 rounded-sm text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full text-white bg-gray-700 rounded-sm"
        />
        <p className="text-red-700 font-bold text-lg">{isError}</p>
        <button
          className="bg-red-700 p-3 my-3 w-full rounded-sm"
          onClick={handleFormSubmit}
        >
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
