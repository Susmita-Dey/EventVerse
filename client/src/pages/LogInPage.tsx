import React from "react";
import imgSrc from "../assets/signupleftimage.png";

const LogInPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Image Column */}
      <div className="w-1/2 bg-blue-500">
        <img
          src={imgSrc}
          alt="EventElevate Login"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Login Form Column */}
      <div className="w-1/2 bg-white p-10">
        <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
              required
            />
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Log In
          </button>
        </form>

        {/* Social Media Log In */}
        <div className="mt-4">
          <button className="bg-red-500 text-white rounded py-2 px-4 hover:bg-red-600">
            Log In with Google
          </button>
        </div>

        {/* New User */}
        <div className="mt-4">
          <p>
            New user?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
