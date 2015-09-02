'use strict';

import open from 'open';
import path from 'path';

export default function(gulp, plugins, options) {
  return () => {
    plugins.livereload.listen({
      livereload: path.resolve(__dirname, '../../node_modules/livereload-js/dist/livereload.js')
    });

    plugins.nodemon({
      script: options.dest.serverJs,
      env: {
        NODE_ENV: 'development',
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD
      }
    });

    gulp.watch(options.src.sass, ['livereload-css']);
    gulp.watch(options.src.html, ['build-html']);
    gulp.watch(options.src.images, ['build-images']);
    gulp.watch(options.src.jsClient, ['livereload-js-client']);

    open(`http://localhost:${options.port}`);
  }
}
