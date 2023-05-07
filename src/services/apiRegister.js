// import { apiUserRegisterLink } from "./apiPresets.js";

// function registerUserApi(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById("formBasicName");
//   const name = nameInput.value;

//   const emailInput = document.getElementById("formBasicEmail");
//   const email = emailInput.value;

//   const passwordInput = document.getElementById("formBasicPassword");
//   const password = passwordInput.value;

//   const avatar = "";

//   const requestBody = {
//     name: name,
//     email: email,
//     password: password,
//     avatar: avatar,
//   };

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestBody),
//   };

//   fetch(apiUserRegisterLink, requestOptions)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// export default registerUserApi;
