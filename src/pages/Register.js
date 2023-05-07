import React from "react";
import { Button, Form } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import validateForm from "../tools/validateForm";
import { registerUser } from "../services/apiEngine";

function Register() {
  const submit = (event) => {
    event.preventDefault();

    const data = validateForm(event.currentTarget);

    if (data) {
      registerUser(data.name, data.email, data.password)
        .then((data) => {
          console.log("DATA", data);
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  return (
    <Form onSubmit={submit}>
      <FormGroup
        required={true}
        minLength={5}
        name="name"
        label="Username"
        type="text"
        placeholder="Enter username"
      />

      <FormGroup
        required={true}
        minLength={5}
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your @stud.noroff.no email"
      />

      <FormGroup
        required={true}
        minLength={8}
        name="password"
        label="Password"
        type="password"
        placeholder="Minimum 8 characters"
      />

      <Button type="submit">Register</Button>
    </Form>
  );
}

export default Register;
