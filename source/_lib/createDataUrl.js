import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createDataUrl(file, mime) {
  try {
    let data = readFileSync(resolve(__dirname, file));
    let encoded = data.toString('base64');
    return `data:${mime};base64,${encoded}`;
  } catch (error) {
    throw new Error(error);
  }
}

export { createDataUrl };
