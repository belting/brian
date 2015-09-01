'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.staticServer)
      .pipe(gulp.dest(options.dest.server));
  };
}
