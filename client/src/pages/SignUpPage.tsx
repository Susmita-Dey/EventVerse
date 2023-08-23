import React, { useState } from "react";
import axios from "axios";
import imgSrc from "../assets/signupleftimage.png";

interface SignUpFormState {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormState>({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/apiv1/signup",
        formData
      );
      console.log(response); //Will result in an error because the above endpoint doesn't exist yet
    } catch (error) {
      console.error(error);
    }
  };

  console.log(formData);

  return (
    <div className="max-w-max container flex flex-row justify-start items-start">
      <div className="">
        <img
          src={imgSrc}
          alt="Live Events"
          className="lg:h-[38em] xl:h-[50rem] w-[50vw] h-[46rem] object-cover"
          width={0}
          height={0}
        />
      </div>
      <div className=" container flex flex-col gap-4 m-10 justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Join the EventVerse Community</h1>
          <p className="text-lg text-gray-600">
            Create Your Account and Start Elevating Your Events Today
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-96">
              <label className="font-medium text-lg" htmlFor="fullname">
                Full Name:
              </label>
              <input
                className="px-4 py-2 border-2 border-gray-400 rounded-md"
                type="text"
                name="fullname"
                id="fname"
                onChange={handleChange}
                value={formData.fullname}
                required
                maxLength={50}
              />
            </div>

            <div className="flex flex-col gap-2 my-4">
              <label className="font-medium text-lg" htmlFor="email">
                Email address:
              </label>
              <input
                className="px-12 py-2 border-2 border-gray-400 rounded-md"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                required
                maxLength={40}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-lg" htmlFor="password">
                Password:
              </label>
              <input
                className="px-12 py-2 border-2 border-gray-400 rounded-md"
                type="password"
                name="password"
                id="pass"
                onChange={handleChange}
                value={formData.password}
                required
                maxLength={15}
              />
            </div>

            <div className="flex flex-col gap-2 my-4">
              <label className="font-medium text-lg" htmlFor="password">
                Confirm Password:
              </label>
              <input
                className="px-4 py-2 border-2 border-gray-400 rounded-md"
                type="password"
                name="confirmpassword"
                id="confpass"
                onChange={handleChange}
                value={formData.confirmpassword}
                required
                maxLength={15}
              />
            </div>

            <button
              type="submit"
              className="my-2 px-8 py-4 bg-gray-900 text-white rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
