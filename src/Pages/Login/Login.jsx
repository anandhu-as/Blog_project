import React, { useState } from "react";
import { google, gitHub } from "../../assets/Images";

const Login = ({ signInWithGoogle }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-30">
      <button
        className="flex items-center gap-3 w-72 px-6 py-3
                   border border-gray-300 rounded-lg
                   shadow-sm hover:bg-gray-50 transition
                   cursor-pointer"
        onClick={signInWithGoogle}
      >
        <img src={google} alt="Google" className="w-7 h-7" />
        <span className="text-gray-700 font-semibold">Sign in with Google</span>
      </button>

      <button
        className="flex items-center gap-3 w-72 px-6 py-3
                   border border-gray-300 rounded-lg
                   shadow-sm hover:bg-gray-50 transition
                    cursor-pointer"
      >
        <img src={gitHub} alt="GitHub" className="w-7 h-7" />
        <span className="text-gray-700 font-medium">Sign in with GitHub</span>
      </button>
    </div>
  );
};

export default Login;
