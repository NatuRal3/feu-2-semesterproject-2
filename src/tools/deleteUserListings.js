import userInfo from "./userInfo";
import { apiDeleteListingLink } from "../services/apiPresets.js";

async function deleteUserListings(listingId) {
  const response = await fetch(`${apiDeleteListingLink}${listingId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo().userAccessToken}`,
    },
  });
  const data = await response.json();
  console.log(response);
  window.location.reload();
  return data;
}

export default deleteUserListings;
