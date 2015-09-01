'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.sass)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
      .pipe(plugins.concat('styles.css'))
      .pipe(plugins.minifyCss())
      .pipe(plugins.rev())
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(options.dest.public));
  };
}
