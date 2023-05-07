import userInfo from "../tools/userInfo";

// SOURCE
const apiLink = "https://api.noroff.dev/api/v1/";

// ACTIVE LISTINGS
const activeListings = "auction/listings?_active=true&sort=created&_tag=AGERUP&sortOrder=desc";
export const apiActiveListingsLink = `${apiLink}${activeListings}`;

// VIEW LISTING
const viewListing = "auction/listings/";
export const apiViewListingLink = `${apiLink}${viewListing}`;

// USER LISTINGS
const userListings = `auction/profiles/${userInfo().userName}?_listings=true`;
export const apiUserListingsLink = `${apiLink}${userListings}`;

// USER CREDITS
const userCredits = "auction/profiles";
export const apiUserCreditsLink = `${apiLink}${userCredits}`;

//LOGIN
const userLogin = "auction/auth/login";
export const apiUserLoginLink = `${apiLink}${userLogin}`;

// REGISTER USER
const userRegister = "auction/auth/register";
export const apiUserRegisterLink = `${apiLink}${userRegister}`;

// UPLOAD AVATAR
const userAvatar = "auction/profiles";
export const apiUserAvatarLink = `${apiLink}${userAvatar}`;

// REGISTER LISTING
const userRegisterListing = "auction/listings";
export const apiRegisterListingLink = `${apiLink}${userRegisterListing}`;

// DELETE LISTING
const deleteListing = "auction/listings/";
export const apiDeleteListingLink = `${apiLink}${deleteListing}`;

// POST BID
const postBid = "auction/listings";
export const apiPostBidLink = `${apiLink}${postBid}`;
