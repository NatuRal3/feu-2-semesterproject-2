import React, { useEffect, useState } from "react";
import CardsGrid from "../components/CardsGrid";
import apiEngine from "../services/apiEngine";
import { apiActiveListingsLink } from "../services/apiPresets";

async function getActiveListings() {
  const response = await apiEngine(apiActiveListingsLink, "GET");
  return response;
}

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getActiveListings();
      setListings(data);
    }
    fetchData();
  }, []);

  return <CardsGrid listings={listings} />;
}

export default Listings;
