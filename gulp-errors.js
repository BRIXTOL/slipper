const chalk = require('chalk');
const notify = require('gulp-notify');
const path = require('path');
const PluginError = require('plugin-error');

module.exports = error => {


  // Skip error CLI out if argument is undefined
  if (typeof error === 'undefined') return;

  let title = '';
  let message = '';
  let report = '';

  /* -------------------------------------------- */
  /*                  SASS ERRORS                 */
  /* -------------------------------------------- */

  if (error.plugin === 'gulp-sass') {

    title = 'CSS';
    message = `Error on line ${error.line} in ${error.relativePath} `;
    report = chalk`\n{red ${error.messageOriginal}}

      {dim Plugin}: ${error.plugin}
        {dim File}: ${error.relativePath}
        {dim Line}: ${error.line}
      {dim Column}: ${error.column}

    `;

  }

  /* -------------------------------------------- */
  /*                 ROLLUP ERRORS                */
  /* -------------------------------------------- */

  if (error.plugin === 'commonjs') {

    const filename = error.loc.file
      .split(path.sep)
      .slice(1)
      .slice(-3)
      .join('/');

    title = 'JavaScript';
    message = `Error on line ${error.loc.line} in ${filename}`;
    report = chalk`\n{red ${error.message}}
      \n{yellow ${error.frame}}

      {dim Plugin}: ${error.plugin}
        {dim File}: ${filename}
        {dim Line}: ${error.loc.line}
      {dim Column}: ${error.loc.column}

    `;

  }

  /* -------------------------------------------- */
  /*                  ICON ERRORS                 */
  /* -------------------------------------------- */

  if (error.plugin === 'gulp-svgmin') {

    title = 'SVG Icons';
    message = `${error.message}`;
    report = chalk`\n{red ${error.message}}

      {dim Plugin}: ${error.plugin}

    `;

  }

  /* -------------------------------------------- */
  /*                 NOTIFICATION                 */
  /* -------------------------------------------- */

  notify({
    title: title,
    message: message,
    sound: 'Pop'
  }).write(error);

  const customError = new PluginError(error.plugin, report, {
    error: error,
    showProperties: false
  });

  throw customError;

};
