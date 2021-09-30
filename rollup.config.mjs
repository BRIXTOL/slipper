import { rollup, plugin, env } from '@brixtol/rollup-config';
import typescript from 'typescript';
import autoprefixer from 'autoprefixer';
import mcss from '@brixtol/mcss';
import sass from 'sass';
import purge from '@fullhuman/postcss-purgecss';
import * as tslib from 'tslib';

export default rollup(
  {
    input: 'src/index.ts',
    output: {
      file: 'public/slipper.min.js',
      format: 'es',
      sourcemap: false
    },
    plugins: env.if('dev')(
      [
        plugin.del(
          {
            targets: [
              'public/style.min.css',
              'public/slipper.min.js',
              'public/tsconfig.tsbuildinfo'
            ]
          }
        ),
        mcss(
          {
            minify: env.prod,
            obfuscate: env.prod,
            declaration: 'src/style/styles.d.ts'
          }
        ),
        plugin.postcss(
          {
            use: { sass },
            autoModules: false,
            extract: 'style.min.css',
            plugins: env.prod ? [
              autoprefixer(),
              purge(
                {
                  variables: true,
                  content: [
                    'src/index.ts',
                    'src/index/*.ts',
                    'src/slips/**/*.ts'
                  ]
                }
              ),
              mcss.postcss()
            ] : [
              mcss.postcss()
            ]
          }
        ),
        plugin.resolve(
          {
            browser: true,
            preferBuiltins: true
          }
        ),
        plugin.commonjs(),
        plugin.ts(
          {
            typescript,
            tslib,
            cacheDir: 'node_modules/.cache/.rollup.tscache',
            outputToFilesystem: false
          }
        ),
        plugin.html(
          {
            title: 'BRIXTOL | Slipper',
            attributes: {
              html: { lang: 'en' },
              link: { content: 'stylesheet' }
            },
            meta: [
              {
                charset: 'utf-8'
              },
              {
                name: 'viewport',
                content: 'minimum-scale=1, initial-scale=1, width=device-width'
              }
            ]
          }
        ),
        env.dev ? plugin.livereload(
          {
            watch: 'public'
          }
        ) : null
      ]
    )(
      [
        plugin.replace(
          {
            preventAssignment: true,
            values: {
              'http://localhost:8888': 'https://slipper.brixtol.com'
            }
          }
        ),
        plugin.terser(
          {
            compress: {
              passes: 2
            }
          }
        )
      ]
    )
  }
);
