import typeAttribute from './type/typeAttribute.js';
import typeBogus from './type/typeBogus.js';
import typeImage from './type/typeImage.js';
import typeMismatch from './type/typeMismatch.js';
import typeOctetStream from './type/typeOctetStream.js';
import sameType from './type/sameType.js';

export default [
  ...typeAttribute,
  ...typeBogus,
  ...typeImage,
  ...typeMismatch,
  ...typeOctetStream,
  ...sameType,
];
