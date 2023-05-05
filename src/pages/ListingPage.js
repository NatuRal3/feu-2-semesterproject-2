import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getListing from "../tools/getListing";

function ListingPage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [highestBid, setHighestBid] = useState(null);

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
      const dayDate = new Date();
      const remainingData = Math.floor(endDate - dayDate);
      const daysLeft = parseInt(remainingData / (1000 * 60 * 60 * 24));
      setDaysLeft(daysLeft);

      const highestBid = Math.max(...listing.bids.map((bid) => bid.amount));
      setHighestBid(highestBid);
    }
  }, [listing]);

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
            <p>Ends in: {daysLeft} days</p>
          </div>
          <div className="flex row">
            <p>Bids: {listing._count.bids}</p>
            <p>Highest bid: {highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
