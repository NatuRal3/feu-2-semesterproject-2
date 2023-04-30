import React from "react";
import loginUserAPI from "../services/apiLogin";
import Buttons from "../components/Buttons";
import Forms from "../components/Forms";

function Login() {
  return (
    <form>
      <Forms
        controlId="formBasicEmail"
        label="Email/Username"
        type="email"
        placeholder="username@stud.noroff.no"
      />
      <Forms controlId="formBasicPassword" label="Password" type="password" placeholder="" />
      <Buttons text="Login" type="submit" onClick={loginUserAPI} />
    </form>
  );
}

export default Login;
