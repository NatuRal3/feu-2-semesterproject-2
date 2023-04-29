//SOURCE
const apiLink = "https://api.noroff.dev/api/v1/";

// ACTIVE LISTINGS

const activeListings = "auction/listings?_active=true&_seller=true";
export const apiActiveListingsLink = `${apiLink}${activeListings}`;

// USER CREDITS
const userCredits = "auction/profiles/{name}/credits";

//LOGIN
const userLogin = "auction/auth/login";
export const apiUserLoginLink = `${apiLink}${userLogin}`;

//REGISTER
const userRegister = "auction/auth/register";
export const apiUserRegisterLink = `${apiLink}${userRegister}`;

const userCreateBid = "auction/listings/{id}/bids";

//PUT
const userAvatar = "auction/profiles/{name}/media";
export const apiUserAvatarLink = `${apiLink}${userAvatar}`;

const userRegisterListing = "auction/listings";
export const apiRegisterListingLink = `${apiLink}${userRegisterListing}`;

//DELETE
