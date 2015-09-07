'use strict';

export default {
  port: 3000,
  src: {
    html: 'src/views/index.hbs',
    images: 'src/public/**/*.{gif,jpg,png}',
    js: 'src/**/*.js',
    jsClient: 'src/{components, public}/**/*.{js,jsx}',
    jsServer: ['src/!(public)/*.{js,jsx}', 'src/*.js', '!src/components/*.client.jsx'],
    sass: 'src/public/**/*.scss',
    staticClient: ['src/public/favicon.ico', 'src/public/browserconfig.xml', 'src/public/favicons/*.*'],
    staticServer: ['src/!(public)/*.!(js|jsx|hbs)', 'src/*.!(js|jsx|hbs)']
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
