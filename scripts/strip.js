const { readFileSync } = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');
const file = readFileSync(resolve(process.cwd(), 'email/sections/order/config.liquid')).toString();

const strip = file
  .replace(/{%-?\s*comment\s*-?%}[\s\S]*?{%-?\s*endcomment\s*-?%}/g, '')
  .replace(/[\n]+|[\s]{2,}/g, '');

console.log(chalk.cyan('INCLUDE AT TOP OF EMAIL TEMPLATE'));
console.log(chalk.gray('--------------------------------\n'));
console.log(chalk.bgBlack.yellowBright(strip));
console.log(chalk.gray('\n\n--------------------------------'));
