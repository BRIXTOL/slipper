const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const { pipeline } = require('stream');
const { rollup } =  require('rollup');
const { uglify } =  require('rollup-plugin-uglify');
const bs = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const nodeResolve =  require('rollup-plugin-node-resolve');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const commonjs =  require('rollup-plugin-commonjs');
const buble =  require('rollup-plugin-buble');
const includePaths =  require('rollup-plugin-includepaths');
const errors = require('./gulp-errors');
const config = require('./build.config');

/* -------------------------------------------- */
/*                 BROWSER SYNC                 */
/* -------------------------------------------- */

function serve (done) {

  bs.init(config.browserSync);

  done();

}

/* -------------------------------------------- */
/*                  STYLESHEETS                 */
/* -------------------------------------------- */

function styles () {

  const task = config.styles;
  const plug = task.plugins;

  return pipeline(
    [
      src(task.src),
      sass(plug.sass),
      cssnano(plug.cssnano),
      dest(task.dest),
      bs.stream()
    ],
    errors
  );

}

exports.styles = styles;


/* -------------------------------------------- */
/*                     ICONS                    */
/* -------------------------------------------- */

function icons() {

  const task = config.icons;
  const plug = task.plugins;

  return pipeline(
    [
      src(task.src),
      svgSprite(plug.svgSprite),
      dest('.')
    ],
    errors
  );

}

exports.icons = icons;


async function scripts () {

  const task = config.scripts;
  const plug = task.plugins;

  try {
    const bundle = await rollup({
      input: task.src,
      plugins: [
        nodeResolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        includePaths(plug.includePaths),
        buble(),
        uglify() // minify, but only in production
      ]
    });

    bundle.write({
      file: task.dest,
      format: 'iife',
      sourcemap: true
    });

  } catch (error) {

    throw errors(error);

  }

}

exports.scripts = scripts;

/* -------------------------------------------- */
/*                     WATCH                    */
/* -------------------------------------------- */

function watchers () {

  watch(config.styles.watch, styles);
  watch(config.scripts.watch, scripts);
  watch(config.icons.src, series(icons, bs.reload));

}

/* -------------------------------------------- */
/*                    EXPORT                    */
/* -------------------------------------------- */

exports.build = series(styles, scripts, icons);
exports.default = parallel(watchers, serve);


