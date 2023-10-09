import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvaliddata } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignForm() {
    setSignInForm(!isSignInForm);
  }

  function handleButtonclick(e) {
    //validate the form data
    e.preventDefault();
    let emailvalue = email.current.value;
    let passvalue = password.current.value;
    let namevalue = name.current.value;
    let message = null;

    if (isSignInForm) {
      message = checkvaliddata(emailvalue, passvalue, null, false);
    } else {
      message = checkvaliddata(emailvalue, passvalue, namevalue, true);
    }
    setError(message);
  }

  return (
    <div>
      <Header />
      <div className="lg:absolute">
        {/* Large screen image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto p-4 lg:p-12 bg-black text-white bg-opacity-70 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-500"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-500"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-500"
        />
        <p className="text-red-500 font-bold text-lg p-2">{error}</p>
        <button className="p-4 my-4 bg-red-700 w-full bg-red-500 rounded-lg" onClick={handleButtonclick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
