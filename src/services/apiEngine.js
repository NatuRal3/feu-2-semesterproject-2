import userInfo from "../tools/userInfo";
import {
  apiViewListingLink,
  apiActiveListingsLink,
  apiUserLoginLink,
  apiRegisterListingLink,
  apiUserRegisterLink,
  apiUserAvatarLink,
  apiPostBidLink,
  apiUserCreditsLink,
} from "./apiPresets";

export async function registerUser(name, email, password) {
  return await apiEngine(apiUserRegisterLink, "POST", { name, email, password, avatar: "" });
}

export async function updateBid(id, amount) {
  console.log(amount);
  return await apiEngine(`${apiPostBidLink}/${id}/bids`, "POST", { amount });
}

export async function updateUserCredits() {
  const userData = userInfo();

  apiEngine(`${apiUserCreditsLink}/${userData.userName}/credits`, "GET").then((data) => {
    localStorage.setItem(
      "userSessionData",
      JSON.stringify({
        ...userData,
        userCredits: data.credits,
      })
    );

    window.location.reload();
  });
}

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
  console.log(`${apiViewListingLink}${listingId}?_seller=true&_bids=true`);
  return response;
}

export async function getActiveListings() {
  const response = await apiEngine(apiActiveListingsLink, "GET");
  return response;
}

export async function updateUserAvatar(avatar) {
  const { userName } = userInfo();
  return await apiEngine(`${apiUserAvatarLink}/${userName}/media`, "PUT", { avatar });
}

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
