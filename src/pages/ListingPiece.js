import React, { useEffect, useState } from "react";
import CardsGrid from "../components/CardsGrid";
import getClickedListing from "../tools/getClickedListing";

function ListingPiece() {
  const [listings, setListingsPiece] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getClickedListing();
      setListingsPiece(data);
    }
    fetchData();
  }, []);

  return <CardsGrid listings={listings} />;
}

export default ListingPiece;
