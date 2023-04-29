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

  return (
    <>
      {listings.map((listing) => (
        <CardsGrid
          key={listing.id}
          id={listing.id}
          title={listing.title}
          description={listing.description}
          media={listing.media}
        />
      ))}
    </>
  );
}

export default Listings;
