import React from "react";
import { Button, Form } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import validateForm from "../tools/validateForm";
import { registerUser } from "../services/apiEngine";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();

    const data = validateForm(event.currentTarget);

    if (data) {
      registerUser(data.name, data.email, data.password)
        .then((data) => {
          navigate("/login");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };

  return (
    <div className="flex column center-items">
      <div className="login">
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
      </div>
    </div>
  );
}

export default Register;
