import React from "react";
import Navnav from "../components/Navnav";

import apiFetch from "../services/api";

function Home() {
  return (
    <>
      <Navnav />
    </>
  );
}

apiFetch();
export default Home;
