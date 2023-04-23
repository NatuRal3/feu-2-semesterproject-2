import { apiRegisterListingLink } from "../services/apiPresets";

function registerListing(event) {
  event.preventDefault();
  console.log("Create listing Button pushed");

  const listingTitleInput = document.getElementById("formNewListingTitle").value;
  const listingDescriptionInput = document.getElementById("formNewListingDescription").value;
  const listingImageInput = document.getElementById("formNewListingImage").value;
  const listingDeadlineInput = document.getElementById("formNewListingDeadline").value;

  const requestBody = {
    title: listingTitleInput,
    description: listingDescriptionInput,
    endsAt: listingDeadlineInput,
    tags: [],
    media: listingImageInput,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  fetch(apiRegisterListingLink, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default registerListing;
