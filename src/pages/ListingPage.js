import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListing, placeBid } from "../services/apiEngine";

import List from "../components/List";
import Buttons from "../components/Buttons";
import Forms from "../components/Forms";

function ListingPage() {
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [highestBid, setHighestBid] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getListing(listingId);
      setListing(data);
      updateBids(data);
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
    }
  }, [listing]);

  const updateBids = (data) => {
    if (data) {
      const highestBid = Math.max(...data.bids.map((bid) => bid.amount));
      setHighestBid(highestBid);

      const highLowBids = [...data.bids].sort((a, b) => b.amount - a.amount);
      setListing((pListing) => {
        return { ...pListing, bids: highLowBids };
      });
    }
  };

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
          <form>
            <Forms controlId="formPostBid" type="number" placeholder="place a bid" />
            <Buttons text="BID" type="submit" onClick={() => placeBid(listing.id)} />
          </form>
        </div>
        <div>
          {listing.bids.reverse().map((bid) => (
            <List
              key={bid.id}
              amount={bid.amount}
              bidderName={bid.bidderName}
              created={bid.created}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
