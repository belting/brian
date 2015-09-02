'use strict';

export default {
  port: 3000,
  src: {
    html: 'src/views/index.hbs',
    js: 'src/**/*.js',
    jsClient: 'src/public/**/*.js',
    jsServer: ['src/!(public)/*.js', 'src/*.js'],
    sass: 'src/public/**/*.scss',
    staticServer: ['src/!(public)/!(*.js|*.hbs)', 'src/!(*.js|*.hbs)']
  },
  dest: {
    jsAndCss: 'dist/public/**/*.{js,css}',
    public: 'dist/public',
    root: 'dist',
    serverJs: 'dist/app.js',
    views: 'dist/views'
  }
}
