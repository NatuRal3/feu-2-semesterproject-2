import userInfo from "../tools/userInfo";
import {
  apiViewListingLink,
  apiActiveListingsLink,
  apiPostBid,
  apiUserLoginLink,
  apiRegisterListingLink,
} from "./apiPresets";

export async function loginUser(email, password) {
  return await apiEngine(apiUserLoginLink, "POST", { email, password });
}

export async function registerListing(title, description, endsAt, media) {
  return await apiEngine(apiRegisterListingLink, "POST", {
    title,
    description,
    endsAt,
    media: [media],
    tags: [`AGERUP`],
  });
}

export async function getListing(listingId) {
  const response = await apiEngine(
    `${apiViewListingLink}${listingId}?_seller=true&_bids=true`,
    "GET"
  );
  return response;
}

export async function getActiveListings() {
  const response = await apiEngine(apiActiveListingsLink, "GET");
  return response;
}

// export async function placeBid(listingId) {
//   const bidAmount = document.getElementById("formPostBid").value;
//   const response = await apiEngine(apiPostBid, "POST");
// }

async function apiEngine(URL, method, body) {
  const allowedMethods = ["GET", "POST", "PUT", "DELETE"];
  const token = userInfo().userAccessToken;

  if (!allowedMethods.includes(method)) {
    throw new Error("Method not allowed, Use GET, POST, PUT or DELETE");
  }
  const request = {
    method: method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  return new Promise((resolve, reject) => {
    fetch(URL, request)
      .then((response) => {
        if (response.ok) return response.json();
        else reject({ status: response.status, message: response.statusText });
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
