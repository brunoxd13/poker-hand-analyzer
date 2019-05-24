function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
exports.normalizeDara = function(str) {
  str = removeSpaces(str);
  return str.match(/.{1,2}/g);
};
