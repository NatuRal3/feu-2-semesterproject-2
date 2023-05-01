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
  console.log(data);
  // Two requests are done here. Not shure why..
  return data;
}

export default getUserListings;