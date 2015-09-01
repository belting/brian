'use strict';

export default function(gulp, plugins, options) {
  return () => {
    return gulp.src(options.src.js)
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failOnError());
  };
}
