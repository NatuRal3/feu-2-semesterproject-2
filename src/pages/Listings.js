import React, { useEffect, useState } from "react";
import CardsGrid from "../components/CardsGrid";
import { getActiveListings } from "../services/apiEngine";

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
