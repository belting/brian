'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.staticClient)
      .pipe(gulp.dest(options.dest.public));
  };
}
