import  { useState } from "react";

import login from "/images/login.jpg";
import logo from "/images/logo.png";
import LoginForm from "./components/LoginForm";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ForgotpasswordForm from "./components/PasswordRestForm";
import PasswordResetRequestForm from "./components/PasswordResetRequestForm";
import { LoginFormType } from "@/Enums/login";
import SignupForm from "./components/SignupForm";
function Login() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [loadForm, setLoadForm] = useState(LoginFormType.LOGIN);

  const handleForgotPassword = () => {
    setLoadForm(LoginFormType.FORGOT_PASSWORD);
  };
  const handleBackLogin = () => {
    setLoadForm(LoginFormType.LOGIN);
  };
  const handleSignupForm = () => {
    setLoadForm(LoginFormType.SIGNUP);
  };

  const handleForm = (page: string) => {
    if (page === LoginFormType.LOGIN) {
      setLoadForm(LoginFormType.LOGIN);
    } else if (page === LoginFormType.SIGNUP) {
      setLoadForm(LoginFormType.SIGNUP);
    } else if (page === LoginFormType.FORGOT_PASSWORD) {
      setLoadForm(LoginFormType.FORGOT_PASSWORD);
    }else if (page === LoginFormType.PASSWORD_RESET) {
      setLoadForm(LoginFormType.PASSWORD_RESET);
    }else return ;
  };

  return (
    <div>
      <section className="flex lg:flex-row flex-col  justify-center items-center min-w-[100vw]  ">
        <div className="lg:w-[60%] lg:h-[100vh] h-[200px] w-full  ">
          <img
            src={login}
            alt="login"
            className="h-full w-full object-cover "
          />
        </div>

        <div className="lg:w-[40%]  lg:h-[100vh] py-4 relative overflow-y-scroll">
          <img
            src={logo}
            alt="logo"
            className="w-[122px] h-[30px] m-auto mt-[10px]  "
          />
          <button
            onClick={handleGoBack}
            className="flex justify-center items-center px-2 pt-8 pb-4 font-jakarta font-bold underline text-black/80 lg:px-16 lg:hidden"
          >
            <ChevronLeft size={20} />
            Back to website
          </button>
          <div className="mt-[10px] px-4 lg:px-10 xl:px-20 lg:mt-[100px]  ">
            <h1 className="text-black text-[2rem] font-normal py-1 font-jakarta ">
              Welcome to <span className="font-bold">Simkit!</span>
            </h1>
            {loadForm === LoginFormType.LOGIN ? (
              <p className="text-[1.1rem] leading-[100%] font-light text-zinc-900 font-jakarta">
                A productivity tool to manage your goals. Sign in to begin your
                journey!
              </p>
            ) : loadForm === LoginFormType.FORGOT_PASSWORD ? (
              <p className="text-[1.1rem] leading-[100%] font-light text-zinc-900 font-jakarta">
                Enter your email address to reset your password.
              </p>
            ) : loadForm === LoginFormType.PASSWORD_RESET ? (
              <p className="text-[1.1rem] leading-[100%] font-light text-zinc-900 font-jakarta">
                Enter your new password.
              </p>
            ) : (
              <p className="text-[1.1rem] leading-[100%] font-light text-zinc-900 font-jakarta">
                A productivity tool to manage your goals. Sign in to begin your
                journey!
              </p>
            )}
          </div>

          <div className="w-full px-4 mt-[20px]   lg:px-10 xl:px-20 ">
            {loadForm === LoginFormType.LOGIN ? (
              <LoginForm handleForgotPassword={handleForgotPassword} handleSignupForm={handleSignupForm} />
            ) : loadForm === LoginFormType.SIGNUP ? (
              <SignupForm handleBackLogin={handleBackLogin} />
            ) : loadForm === LoginFormType.FORGOT_PASSWORD ? (
              <PasswordResetRequestForm handleBackLogin={handleBackLogin} />
            ) : loadForm === LoginFormType.PASSWORD_RESET ? (
              <ForgotpasswordForm />
            ) : (
              <LoginForm handleForgotPassword={handleForgotPassword} />
            )}

            {loadForm === LoginFormType.LOGIN ? (
              <p className="text-center mt-[30px] lg:mt-[80px] xl:mt-[100px] ">
                Don't have an account?{" "}
                <span
                  onClick={() => handleForm(LoginFormType.SIGNUP)}
                  className="text-black/90 font-bold cursor-pointer "
                >
                  Create one here
                </span>
              </p>
            ) : loadForm === LoginFormType.SIGNUP ? (
              <p className="text-center mt-[30px] lg:mt-[80px] xl:mt-[100px] ">
                Already have an account?{" "}
                <span
                  onClick={() => handleForm(LoginFormType.LOGIN)}
                  className="text-black/90 font-bold cursor-pointer "
                >
                  Login here!
                </span>
              </p>
            ) : (
              <p className="text-center mt-[30px] lg:mt-[80px] xl:mt-[100px] ">
                Don't have an account?{" "}
                <span
                  onClick={() => handleForm(LoginFormType.SIGNUP)}
                  className="text-black/90 font-bold cursor-pointer "
                >
                  Create one here
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
