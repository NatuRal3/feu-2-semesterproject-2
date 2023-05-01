import React from "react";
import Forms from "../components/Forms";
import registerListing from "../tools/registerListing";
import Buttons from "../components/Buttons";
import { Form } from "react-bootstrap";

function newListing() {
  return (
    <Form>
      <Forms controlId="formNewListingTitle" label="Name" type="text" placeholder="Artname" />
      <Forms
        controlId="formNewListingDescription"
        label="Description"
        type="textarea"
        placeholder="Description"
      />
      <Forms controlId="formNewListingDeadline" label="Deadline" type="date" />
      <Forms
        controlId="formNewListingImage"
        label="URL"
        type="url"
        value="{imageUrl}"
        placeholder="Enter image url"
      />
      <Buttons
        text="Register Listing"
        variant="primary"
        type="submit"
        onClick={(event) => registerListing(event)}
      />
    </Form>
  );
}

export default newListing;
