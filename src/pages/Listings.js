import React, { useEffect, useState } from "react";
import CardsGrid from "../components/CardsGrid";
import { getActiveListings } from "../services/apiEngine";
import { Form, InputGroup } from "react-bootstrap";

function Listings() {
  const [originalListings, setOriginalListings] = useState([]);
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getActiveListings();
      setOriginalListings(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setListings(originalListings);
  }, [originalListings]);

  useEffect(() => {
    if (searchTerm) {
      setListings(
        originalListings.filter((item) => {
          const includesInDescription = item.description.includes(searchTerm);
          const includesInTitle = item.title.includes(searchTerm);

          return includesInDescription || includesInTitle;
        })
      );
    } else {
      setListings(originalListings);
    }
  }, [searchTerm, originalListings]);
  return (
    <div className="container-listings flex center-items column">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchTerm}
          onChange={(term) => setSearchTerm(term.currentTarget.value)}
        />
      </InputGroup>
      <div className="content-listings">
        <CardsGrid listings={listings} />
      </div>
    </div>
  );
}

export default Listings;
