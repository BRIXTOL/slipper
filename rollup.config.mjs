import { rollup, plugin, env, config } from '@brixtol/rollup-config';
import autoprefixer from 'autoprefixer';
import sass from 'sass';
import purge from '@fullhuman/postcss-purgecss';

export default rollup(
  {
    input: 'src/index.ts',
    output: {
      file: 'public/slipper.min.js',
      format: 'es',
      sourcemap: env.is('dev', 'inline')
    },
    plugins: env.if('dev')(
      [
        plugin.replace(
          {
            preventAssignment: true,
            delimiters: [ '<!', '!>' ],
            values: {
              version: config.package.version
            }
          }
        ),
        plugin.postcss(
          {
            use: { sass },
            autoModules: false,
            minimize: env.prod,
            extract: 'style.min.css',
            plugins: env.is('prod', [
              autoprefixer(),
              purge(
                {
                  variables: true,
                  content: [
                    'src/index.ts',
                    'src/views/**/*.ts'
                  ]
                }
              )
            ])
          }
        ),
        plugin.resolve(
          {
            browser: true,
            preferBuiltins: true
          }
        ),
        plugin.commonjs(),
        plugin.esbuild(),
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
              'http://localhost:65111': 'https://slipper.brixtol.com'
            }
          }
        ),
        plugin.esminify()
      ]
    )
  }
);
