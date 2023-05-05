import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getListing from "../tools/getListing";

function ListingPage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getListing(listingId);
      console.log(data);
      setListing(data);
    }
    fetchData();
  }, [listingId]);

  useEffect(() => {
    if (listing) {
      const endDate = new Date(listing.endsAt);
      console.log(endDate);
    }
  });

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-listing flex center">
      <div className="card-listing flex ">
        <div className="card-info-media">
          <img src={listing.media} alt={listing.title} />
        </div>
        <div className="card-info-txt flex column">
          <div>
            <h1>{listing.title}</h1>
            <p>{listing.description}</p>
            <p>Ends: {listing.endsAt}</p>
          </div>
          <div className="flex row">
            <p>Bids: {listing._count.bids}</p>
            <p>Highest bid:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
