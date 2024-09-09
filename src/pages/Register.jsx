import React, { useState } from "react";
import Button from "../componants/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle registration logic here
  };

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-black rounded-lg px-6 md:px-8 py-6 md:py-8 mb-4"
        >
          <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
            Register
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <Link to="../Login">
            <p className="text-xs md:text-sm mb-4 capitalize underline text-center">
              Already have an account? Click to Login
            </p>
          </Link>
          <div className="flex items-center justify-between">
            <Button content={"Register"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
