const apiLink = "https://api.noroff.dev/api/v1/";

//GET
const activeListings = "/auction/listings?_active=true&_seller=true";
const userCredits = "/api/v1/auction/profiles/{name}/credits";

//POST
const userLogin = "/api/v1/auction/auth/login";
const userRegister = "/api/v1/auction/auth/register";
const userCreateBid = "/api/v1/auction/listings/{id}/bids";

//PUT
const userAvatar = "/api/v1/auction/profiles/{name}/media";
const userCreateListing = "/api/v1/auction/listings/{id}";

//DELETE
