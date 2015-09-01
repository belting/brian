'use strict';

export default {
  port: 3000,
  src: {
    html: 'client/index.html',
    js: '{client,server,tasks}/**/*.js',
    jsClient: 'client/components/**/*.js',
    jsServer: 'server/**/*.js',
    sass: 'client/**/*.scss'
  },
  dest: {
    jsAndCss: 'dist/public/**/*.{js,css}',
    public: 'dist/public',
    root: 'dist',
    server: 'dist/server',
    serverApp: 'dist/server/app.js',
  }
}
