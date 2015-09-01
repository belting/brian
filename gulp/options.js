'use strict';

export default {
  src: {
    html: 'index.html',
    js: '{client/server/tasks}/**/*.js',
    jsClient: 'client/components/**/*.js',
    jsServer: 'server/**.*.js',
    sass: 'client/**/*.scss'
  },
  dest: {
    public: 'dist/public',
    server: 'dist/server',
    jsAndCss: 'dist/public/**/*.{js,css}'
  }
}
