const { readFileSync } = require('fs');
const { resolve } = require('path');
const file = readFileSync(resolve(process.cwd(), 'test.liquid')).toString();
const strip = file.replace(/[\n]+|[\s]{2,}/g, '');

console.log(strip);
