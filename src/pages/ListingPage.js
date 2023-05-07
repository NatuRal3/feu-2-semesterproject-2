import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListing, updateUserCredits } from "../services/apiEngine";
import List from "../components/List";
import { Button, Form } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import validateForm from "../tools/validateForm";
import { updateBid } from "../services/apiEngine";

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
  }, []);

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
      const highLowBids = [...data.bids].sort((a, b) => b.amount - a.amount);

      const value = [...highLowBids].shift();

      setHighestBid(value?.amount || 0);

      setListing((pListing) => {
        return { ...pListing, bids: highLowBids };
      });
    }
  };

  const submitBid = (event) => {
    event.preventDefault();
    const formData = validateForm(event.currentTarget);

    if (formData) {
      const bid = parseInt(formData.bid);
      updateBid(listingId, bid)
        .then((data) => {
          updateUserCredits();
          console.log("Success", data);
        })
        .catch((error) => {
          console.log("Error", error);
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
            <p>Highest bid: {highestBid === 0 ? "No bids yet" : highestBid}</p>
          </div>

          <Form onSubmit={submitBid}>
            <FormGroup
              required={true}
              label="Bid"
              name="bid"
              type="number"
              placeholder="Enter bid"
              min={highestBid + 1}
            />
            <Button type="submit">Bid</Button>
          </Form>
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
