const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

function createDataUrl(file, mime) {
  try {
    let data = readFileSync(resolve(__dirname, file));
    let encoded = data.toString('base64');
    return `data:${mime};base64,${encoded}`;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createDataUrl };
