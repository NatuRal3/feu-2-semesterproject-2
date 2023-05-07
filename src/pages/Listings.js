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

  return (
    <div className="container-listings flex center-items">
      <div className="content-listings">
        <CardsGrid listings={listings} />;
      </div>
    </div>
  );
}

export default Listings;
