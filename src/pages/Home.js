import React from "react";
import Navnav from "../components/Navnav";
import BoardSlider from "../components/boardSlider";
import apiFetch from "../services/api";

function Home() {
  return (
    <>
      <Navnav />
      <BoardSlider />
    </>
  );
}

apiFetch();
export default Home;
