const iconsByFormat = require('./iconsByFormat.js');
const singleImageIco = require('./singleImageIco.js');
const multiImageIco = require('./multiImageIco.js');
const typeMismatch = require('./typeMismatch.js');
const extSpoofing = require('./extSpoofing.js');

module.exports = [
  ...iconsByFormat,
  ...singleImageIco,
  ...multiImageIco,
  ...typeMismatch,
  ...extSpoofing,
]
