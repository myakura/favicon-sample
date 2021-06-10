const typeMismatch = require('./typeMismatch.js');
const extSpoofing = require('./extSpoofing.js');

module.exports = [
  ...typeMismatch,
  ...extSpoofing,
]
