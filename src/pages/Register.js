import React from "react";
import Forms from "../components/forms/Forms.js";
import registerUserApi from "../services/apiRegister.js";
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <>
      <Forms
        controlId="formBasicName"
        label="Username"
        type="name"
        placeholder="Desired username"
      />

      <Forms
        controlId="formBasicEmail"
        label="Email Address"
        type="email"
        placeholder="Enter your @stud.noroff.no email"
      />

      <Forms
        controlId="formBasicPassword"
        label="Password"
        type="password"
        placeholder="Minimum 8 characters"
      />

      <Button variant="primary" type="submit" onClick={registerUserApi}>
        Register
      </Button>
    </>
  );
}

export default Register;
