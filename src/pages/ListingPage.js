import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getListing from "../tools/getListing";

function ListingPage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getListing(listingId);
      setListing(data);
    }
    fetchData();
  }, [listingId]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <img src={listing.media} alt={listing.title} />
      <p>{listing.description}</p>
    </div>
  );
}

export default ListingPage;
