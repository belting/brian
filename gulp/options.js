'use strict';

export default {
  port: 3000,
  src: {
    html: 'client/index.hbs',
    js: '{client,server,tasks}/**/*.js',
    jsClient: 'client/components/**/*.js',
    jsServer: 'server/**/*.js',
    sass: 'client/**/*.scss',
    staticServer: 'server/**/!(*.js)'
  },
  dest: {
    jsAndCss: 'dist/public/**/*.{js,css}',
    public: 'dist/public',
    root: 'dist',
    server: 'dist/server',
    serverApp: 'dist/server/app.js',
  }
}
