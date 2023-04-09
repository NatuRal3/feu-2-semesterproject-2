import React from "react";
import Form from "react-bootstrap/Form";
import registerUserApi from "../services/apiRegister.js";
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={registerUserApi}>
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;
