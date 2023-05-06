async function apiEngine(URL, method, body) {
  const request = {
    method: method,
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify.apply(body),
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

export default apiEngine;
