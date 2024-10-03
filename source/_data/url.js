import dataUrl from './url/dataUrl.js';
import extSpoofing from './url/extSpoofing.js';
import notFound from './url/notFound.js';

export default [
  ...dataUrl,
  ...extSpoofing,
  ...notFound,
];
