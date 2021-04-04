const iconsByFormat = require('./iconsByFormat.js');
const markup = require('./markup.js');
const multiImageIco = require('./multiImageIco.js');
const typeMismatch = require('./typeMismatch.js');
const extSpoofing = require('./extSpoofing.js');

module.exports = [
  ...iconsByFormat,
  ...markup,
  ...multiImageIco,
  ...typeMismatch,
  ...extSpoofing,
]
