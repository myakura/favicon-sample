import withShortcutWithType from './markup/withShortcutWithType.js';
import withShortcutWithoutType from './markup/withShortcutWithoutType.js';
import withoutShortcutWithType from './markup/withoutShortcutWithType.js';
import withoutShortcutWithoutType from './markup/withoutShortcutWithoutType.js';
import relAlternate from './markup/relAlternate.js';
import relOtherValues from './markup/relOtherValues.js';

export default [
  ...withShortcutWithType,
  ...withShortcutWithoutType,
  ...withoutShortcutWithType,
  ...withoutShortcutWithoutType,
  ...relAlternate,
  ...relOtherValues,
];
