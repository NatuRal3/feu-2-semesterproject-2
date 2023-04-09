import { apiUserLoginLink } from "./apiPresets.js";

function loginUserAPI(event) {
  event.preventDefault();

  const emailInput = document.getElementById("formBasicEmail");
  const email = emailInput.value;

  const passwordInput = document.getElementById("formBasicPassword");
  const password = passwordInput.value;

  const requestBody = {
    email: email,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  fetch(apiUserLoginLink, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default loginUserAPI;
