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
    public: 'dist/public',
    server: 'dist/server',
    serverApp: 'dist/server/app.js',
    jsAndCss: 'dist/public/**/*.{js,css}'
  }
}
