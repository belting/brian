'use strict';

export default function(gulp, plugins, options) {
  return () => {
    let sources = gulp.src(options.dest.jsAndCss, {
      read: false
    });

    return gulp.src(options.src.html)
      .pipe(plugins.inject(sources, {
        ignorePath: options.dest.public
      }))
      .pipe(gulp.dest(options.dest.views));
  };
}
