import React, { useState } from "react";

const LoginInputs = ({
  imgSrc,
  subtitle,
  confirm,
  existingAccText,
  googleText,
  forgotPass,
}) => {
  const [confirmPass, setConfirmPass] = useState(confirm);
  const [forgotPassword, setforgotPassword] = useState(forgotPass);
  return (
    <div>
      <div>
        <img src={imgSrc} alt="" className="" width={0} height={0} />
      </div>
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl text-center">
            Join the EventVerse Community
          </h1>
          <p className="text-center text-gray-400">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-2">
          <form action="" method="post">
            <div className="flex flex-col gap-1">
              <label>Full Name</label>
              <input type="text" name="fullname" id="fullname" className="" />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email address</label>
              <input type="email" name="email" id="email" className="" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="">
                <label>Password</label>
                {forgotPassword && (
                  <a href="/forgot-password" className="text-gray-500 text-lg">
                    Forgot Password?
                  </a>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className=""
                />
                Icon
              </div>
            </div>
            {confirmPass && (
              <div className="flex flex-col gap-1">
                <label>Confirm Password</label>
                <div>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className=""
                  />
                  Icon
                </div>
              </div>
            )}
            <button type="submit" className="px-10 py-2 text-center text-blue-950 bg-sky-600">Get Started</button>
          </form>
        </div>
        <p className="text-base text-gray-400">{existingAccText}</p>
      <div className="flex flex-row justify-around">
        <div className=""></div>
        <p>or</p>
        <div className=""></div>
      </div>
      <div>
        <button>
            <span>
                <img src="" alt="" className="" />
            </span>
            <span>Sign Up with Google</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default LoginInputs;
