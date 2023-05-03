import React, { useEffect, useState } from "react";
import { apiViewListingLink } from "../services/apiPresets";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export async function getListingID(listingId) {
  const response = await fetch(`${apiViewListingLink}${listingId}`);
  const data = response.json();
  return data;
}

export function ListingView({ listingId }) {
  const [listing, setListing] = useState(null);
  useEffect(() => {
    async function fetchListing() {
      const data = await getListingID(listingId);
      setListing(data);
    }
    fetchListing();
  }, [listingId]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{listing.Title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
