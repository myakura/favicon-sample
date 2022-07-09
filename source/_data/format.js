module.exports = [
  ...require('./format/png.js'),
  ...require('./format/jpg.js'),
  ...require('./format/webp.js'),
  ...require('./format/avif.js'),
  ...require('./format/jxl.js'),
  ...require('./format/svg.js'),
  ...require('./format/icoSingle.js'),
  ...require('./format/icoMultiple.js'),
];
