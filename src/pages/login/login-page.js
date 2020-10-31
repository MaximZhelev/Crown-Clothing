import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./login-page.scss";

const LoginPage = () => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;
