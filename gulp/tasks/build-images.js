'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.images)
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(options.dest.public));
  }
}
