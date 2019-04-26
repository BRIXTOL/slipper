module.exports = {

  /* -------------------------------------------- */
  /*                    SCRIPTS                   */
  /* -------------------------------------------- */

  scripts: {
    src: 'src/bundle.js',
    watch: [ 'src/**/*.js' ],
    dest: 'dist/bundle.js',
    plugins: {
      includePaths: {
        paths: ['./src/views'],
        extensions: ['.js']
      }
    }
  },

  /* -------------------------------------------- */
  /*                    STYLES                    */
  /* -------------------------------------------- */

  styles: {
    src: 'src/sass/styles.scss',
    watch: [ 'src/sass/**/*.scss' ],
    dest: 'dist',
    plugins: {
      sass: {
        outputStyle: 'uncompressed',
        includePaths: [ 'node_modules/' ]
      },
      cssnano: {
        autoprefixer: {
          add: true,
          browsers: []
        }
      }
    }
  },

  /* -------------------------------------------- */
  /*                     ICONS                    */
  /* -------------------------------------------- */

  icons: {
    src: 'src/icons/*.svg',
    plugins: {
      svgSprite: {
        svg: {
          xmlDeclaration: false,
          doctypeDeclaration: false,
          namespaceIDs: false,
          dimensionAttributes: false
        },
        mode: {
          shape: {
            dimension: {
              precision: 2,
              attributes: false
            }
          },
          symbol: {
            inline: true,
            dest: 'dist',
            sprite: 'icons.svg',
            example: false
          }
        }
      }
    }
  },

  /* -------------------------------------------- */
  /*                 BROWSER SYNC                 */
  /* -------------------------------------------- */

  browserSync: {
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    },
    index: 'index.html'
  }
};
