'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.jsClient)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel())
      .pipe(plugins.concat('scripts.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.rev())
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(options.dest.public));
  };
}
