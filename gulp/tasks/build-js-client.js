'use strict';

import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import source from 'vinyl-source-stream';

export default function(gulp, plugins, options) {
  return () => {
    let files = glob.sync(options.src.jsClient);
    let b = browserify({
      entries: files,
      debug: true,
      transform: [babelify]
    });

    return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({
        loadMaps: true
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.rev())
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(options.dest.public));

    // return gulp.src(options.src.jsClient)
    //   .pipe(plugins.sourcemaps.init())
    //   .pipe(plugins.babel())
    //   .pipe(plugins.concat('scripts.js'))
    //   .pipe(plugins.uglify())
    //   .pipe(plugins.rev())
    //   .pipe(plugins.sourcemaps.write('./'))
    //   .pipe(gulp.dest(options.dest.public));
  };
}
