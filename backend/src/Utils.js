exports.normalizeDara = function(hand) {
  return hand.match(/.{1,2}/g).join(" ");
};
