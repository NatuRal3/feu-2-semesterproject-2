import React from "react";
import Navnav from "../components/Navnav";
import BoardSlider from "../components/boardSlider";

function Home() {
  return (
    <>
      <Navnav />
      <BoardSlider />
    </>
  );
}

async function apiFetch() {
  const response = await fetch(
    "https://api.noroff.dev/api/v1/auction/listings?_active=true&_seller=true"
  );
  const userData = await response.json();
  console.log(userData);
  return userData;
}
apiFetch();
export default Home;
