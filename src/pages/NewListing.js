import React from "react";
import Forms from "../components/Forms";
import registerListing from "../tools/registerListing";
import Buttons from "../components/Buttons";

function newListing() {
  return (
    <>
      <Forms controlId="formNewListingTitle" label="Name" type="text" placeholder="TEST ETST" />
      <Forms controlId="formNewListingDeadline" label="Deadline" type="date" />
      <Forms controlId="formNewListingImage" label="File" type="file" />
      <Buttons text="Register Listing" variant="primary" type="submit" onClick={registerListing} />
    </>
  );
}

export default newListing;

//title, deadline date, media gallery and description
//Create a way to choose from all the pictures in the assets
