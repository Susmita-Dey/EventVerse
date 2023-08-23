import React from "react";
import imgSrc from "../assets/signupleftimage.png";

const SignupPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Image Column */}
      <div className="w-1/2 bg-black">
        <img
          src={imgSrc}
          alt="EventElevate Signup"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Signup Form Column */}
      <div className="w-1/2 bg-white p-10">
        <h2 className="text-3xl font-bold mb-6">Join EventElevate</h2>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
              required
            />
          </div>

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

          {/* Password Fields */}
          <div className="mb-4">
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
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Sign Up
          </button>
        </form>

        {/* Social Media Sign Up */}
        <div className="mt-4">
          <button className="bg-red-500 text-white rounded py-2 px-4 hover:bg-red-600">
            Sign Up with Google
          </button>
        </div>

        {/* Already Have an Account */}
        <div className="mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
