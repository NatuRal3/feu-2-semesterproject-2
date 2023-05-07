import React from "react";
import { loginUser } from "../services/apiEngine";
import FormGroup from "../components/FormGroup";
import validateForm from "../tools/validateForm";
import { Form, Button } from "react-bootstrap";

function Login() {
  const login = async (event) => {
    event.preventDefault();

    const data = validateForm(event.currentTarget);

    if (data) {
      loginUser(data.email, data.password)
        .then((data) => {
          localStorage.setItem(
            "userSessionData",
            JSON.stringify({
              userName: data.name,
              userEmail: data.email,
              userCredits: data.credits,
              userAvatar: data.avatar,
              userAccessToken: data.accessToken,
            })
          );
          window.location.href = "/listings";
        })
        .catch((error) => {
          switch (error.status) {
            case 401:
              console.error("Wrong username or password");
              break;
            default:
              console.error("There was a problem");
          }
        });
    }
  };

  return (
    <div className="flex column center-items">
      <div className="login">
        <Form onSubmit={login}>
          <FormGroup
            label="Email/Username"
            required={true}
            minLength={5}
            type="email"
            placeholder="username@stud.noroff.no"
            name="email"
          />
          <FormGroup
            label="Password"
            required={true}
            minLength={8}
            type="password"
            name="password"
            placeholder="* * * * * * * *"
          />
          <Button type="submit"> Login </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
