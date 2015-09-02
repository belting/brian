'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.jsServer)
      .pipe(plugins.babel())
      .pipe(gulp.dest(options.dest.root));
  }
}
