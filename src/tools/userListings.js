import userInfo from "./userInfo";
import { apiUserListingsLink } from "../services/apiPresets.js";

async function getUserListings() {
  const response = await fetch(`${apiUserListingsLink}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo().userAccessToken}`,
    },
  });
  const data = await response.json();
  data.listings.map((listings) => {
    const dataObjects = listings;
    console.log(dataObjects);
    return listings;
    // return dataObjects;
  });
}

export default getUserListings;
