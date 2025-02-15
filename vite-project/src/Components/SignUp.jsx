import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name && password) {
      localStorage.setItem("user", name);
      alert("Sign-up successful! Please Sign In.");
      navigate("/signin");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
