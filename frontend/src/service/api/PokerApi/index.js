const api = "http://127.0.0.1:3001/poker";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const checkHand = (hand1, hand2) =>
  fetch(`${api}/check-hand`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ hand1, hand2 })
  })
    .then(res => res.json())
    .then(data => data);
