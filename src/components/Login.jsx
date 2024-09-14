import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  LoginWithEmail,
  SignInWithGoogle,
  signInWithFacebook,
} from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await LoginWithEmail(email, password);
      toast.success("Logged In Succesfully.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleGoogle = async () => {
    try {
      const user = await SignInWithGoogle();
      toast.success("Logged In Succesfully.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleFacebook = async () => {
    try {
      await signInWithFacebook();
      toast.success("Logged In Succesfully.");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-green-500">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none "
          >
            Log In
          </button>
          <div className="flex items-center gap-2">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <p className=" text-center text-lg font-semibold">OR</p>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          <div className=" text-gray-500 text-lg font-semibold flex justify-center gap-14 xss:gap-6 ">
            <button
              className="border-2 xss:w-2/5 px-2 rounded-md bg-gray-200 hover:bg-gray-200/70 flex justify-center items-center gap-2"
              onClick={handleGoogle}
            >
              <GoogleIcon fontSize="medium" />
              <span className="hidden xss:block "> Google</span>
            </button>
            <button
              className="border-2 xss:w-2/5 px-2 rounded-md bg-gray-200 hover:bg-gray-200/70 flex justify-center items-center gap-2"
              onClick={handleFacebook}
            >
              <FacebookIcon fontSize="large" />
              <span className="hidden xss:block">Facebook</span>
            </button>
          </div>
        </form>
        <p className="text-base text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
