import png from './format/png.js';
import jpg from './format/jpg.js';
import webp from './format/webp.js';
import avif from './format/avif.js';
import jxl from './format/jxl.js';
import svg from './format/svg.js';
import icoSingle from './format/icoSingle.js';
import icoMultiple from './format/icoMultiple.js';

export default [
  ...png,
  ...jpg,
  ...webp,
  ...avif,
  ...jxl,
  ...svg,
  ...icoSingle,
  ...icoMultiple,
];
