async function apiFetch() {
  const response = await fetch(
    "https://api.noroff.dev/api/v1/auction/listings?_active=true&_seller=true"
  );
  const userData = await response.json();
  console.log(userData);
}

export default apiFetch;
