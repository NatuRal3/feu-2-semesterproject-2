import React from "react";
import Forms from "../components/Forms";

function newListing() {
  return (
    <>
      <Forms controlId="formNewListingTitle" label="Name" type="text" placeholder="TEST ETST" />
      <Forms controlId="formNewListingDeadline" label="Deadline" type="date" />
      <Forms controlId="formNewListingImage" label="File" type="file" />
    </>
  );
}

export default newListing;

//title, deadline date, media gallery and description
