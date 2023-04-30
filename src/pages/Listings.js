import React, { useEffect, useState } from "react";
import getActiveListings from "../tools/activeListings";
import CardsGrid from "../components/CardsGrid";

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
