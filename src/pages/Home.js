import React from "react";
import Navnav from "../components/Navnav";
import HomeSlider from "../components/HomeSlider";
import BoardSlider from "../components/boardSlider";

function Home() {
  return (
    <>
      <Navnav />
      <HomeSlider />
      <BoardSlider />
    </>
  );
}

export default Home;
