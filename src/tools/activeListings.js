import { apiActiveListingsLink } from "../services/apiPresets";

async function getActiveListings() {
  const response = await fetch(apiActiveListingsLink);
  const data = await response.json();
  listings;
}
export default getActiveListings;
