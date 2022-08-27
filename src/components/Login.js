import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Mustafa", age: 23, email: "mete@gmail.com" })
          );
        }}
        className="bg-white px-6 py-1 rounded hover:text-slate-400 mt-2"
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="bg-white px-6 py-1 rounded hover:text-slate-400 mt-2 ml-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
