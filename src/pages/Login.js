import React from "react";
import loginUserAPI from "../services/apiLogin";

import Button from "react-bootstrap/Button";
import Forms from "../components/Forms";

function Login() {
  return (
    <>
      <Forms
        controlId="formBasicEmail"
        label="Email/Username"
        type="email"
        placeholder="username@stud.noroff.no"
      />
      <Forms controlId="formBasicPassword" label="Password" type="password" placeholder="" />

      <Button variant="primary" type="submit" onClick={loginUserAPI}>
        Login
      </Button>
    </>
  );
}

export default Login;
