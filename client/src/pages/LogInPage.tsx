import React, { useState } from "react";
import axios from "axios";
import imgSrc from "../assets/signupleftimage.png";

interface SignUpFormState {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

function LogInPage() {
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
    <div className="max-w-max container flex flex-row justify-center items-center">
      <div>
        <img src={imgSrc} alt="Live Events" className="" width={0} height={0} />
      </div>
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col gap-2 justify-center text-center items-center">
          <h1 className="text-white text-3xl">
            Join the EventVerse Community
          </h1>
          <p className="text-gray-400">Create Your Account and Start Elevating Your Events Today</p>
        </div>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="" htmlFor="fullname">
                Full Name:
              </label>
              <input
                className="px-8 py-5"
                type="text"
                name="fullname"
                id="fname"
                onChange={handleChange}
                value={formData.fullname}
                required
                maxLength={50}
              />
            </div>

            <div className="">
              <label className="" htmlFor="email">
                Email address:
              </label>
              <input
                className="px-8 py-5"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                required
                maxLength={40}
              />
            </div>

            <div className="">
              <label className="" htmlFor="password">
                Password:
              </label>
              <input
                className="px-8 py-5"
                type="password"
                name="password"
                id="pass"
                onChange={handleChange}
                value={formData.password}
                required
                maxLength={15}
              />
            </div>

            <div className="">
              <label className="" htmlFor="password">
                Confirm Password:
              </label>
              <input
                className="px-8 py-5"
                type="password"
                name="confirmpassword"
                id="confpass"
                onChange={handleChange}
                value={formData.confirmpassword}
                required
                maxLength={15}
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
