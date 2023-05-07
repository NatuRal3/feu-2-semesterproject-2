import React from "react";
import registerUserApi from "../services/apiRegister.js";
import { Form, Button } from "react-bootstrap";
import FormGroup from "../components/FormGroup.js";

function Register() {
  return (
    <>
      <Form>
        <FormGroup
          controlId="formBasicName"
          label="Username"
          type="name"
          placeholder="Desired username"
        />

        <FormGroup
          controlId="formBasicEmail"
          label="Email Address"
          type="email"
          placeholder="Enter your @stud.noroff.no email"
        />

        <FormGroup
          controlId="formBasicPassword"
          label="Password"
          type="password"
          placeholder="Minimum 8 characters"
        />
        <Button text="Register" variant="primary" type="submit" onClick={registerUserApi} />
      </Form>
    </>
  );
}

export default Register;
