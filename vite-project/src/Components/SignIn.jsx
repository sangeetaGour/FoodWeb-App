import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && name === storedUser) {
      alert("Sign-in successful!");
      navigate("/");
      window.location.reload();
    } else {
      alert("User not found! Please Sign Up first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
