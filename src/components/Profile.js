import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="container mx-auto">
      <header className="w-full h-12 bg-black text-white flex items-center justify-center font-bold">
        <h1>REACT-REDUX BASIC LOGIN APP</h1>
      </header>
      <div className="w-full h-auto bg-slate-300 flex justify-center">
        <div className="p-6 font-bold">
          <p>
            Name: <span className="text-sm text-slate-600">{user.name}</span>{" "}
          </p>
          <p>
            Age: <span className="text-sm text-slate-600"> {user.age} </span>
          </p>
          <p>
            Email:{" "}
            <span className="text-sm text-slate-600"> {user.email} </span>
          </p>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Profile;
