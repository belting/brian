'use strict';

export default {
  port: 3000,
  src: {
    html: 'src/views/index.hbs',
    images: 'src/public/**/*.{gif,jpg,png}',
    js: 'src/**/*.js',
    jsClient: 'src/public/**/*.{js,jsx}',
    jsServer: ['src/!(public)/*.js', 'src/*.js'],
    sass: 'src/public/**/*.scss',
    staticServer: ['src/!(public)/!(*.js|*.hbs)', 'src/!(*.js|*.hbs)']
  },
  dest: {
    css: 'dist/public/**/*.{css,css.map}',
    jsAndCss: 'dist/public/**/*.{js,css}',
    jsClient: 'dist/public/**/*.{js,js.map}',
    public: 'dist/public',
    root: 'dist',
    serverJs: 'dist/app.js',
    views: 'dist/views'
  }
}
