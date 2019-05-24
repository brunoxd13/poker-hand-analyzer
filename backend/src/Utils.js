function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
exports.normalizeDara = function(str) {
  str = str.toLowerCase();
  str = removeSpaces(str);
  str = str.match(/.{1,2}/g);

  str = str.map(s => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  });

  return str;
};
