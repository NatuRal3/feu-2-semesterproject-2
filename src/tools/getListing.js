import { apiViewListingLink } from "../services/apiPresets";

async function getListing(listingId) {
  const response = await fetch(`${apiViewListingLink}${listingId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch listing ${listingId}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export default getListing;
