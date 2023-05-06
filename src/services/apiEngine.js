import { apiViewListingLink, apiActiveListingsLink } from "./apiPresets";

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

async function apiEngine(URL, method, body) {
  const allowedMethods = ["GET", "POST", "PUT", "DELETE"];
  if (!allowedMethods.includes(method)) {
    console.error("Method not allowed");
    return;
  }
  const request = {
    method: method,
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return new Promise((resolve, reject) => {
    fetch(URL, request)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
