import fs from 'fs';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import options from './gulp/options';
import path from 'path';
import runSequence from 'run-sequence';

let plugins = gulpLoadPlugins();

// Load tasks from files
fs.readdirSync(path.resolve(__dirname, 'gulp/tasks'))
  .map(filename => filename.split('.')[0])
  .forEach(task => gulp.task(task, require(`./gulp/tasks/${task}`)(gulp, plugins, options)));


gulp.task('build', callback => {
  runSequence('lint', ['build-css', 'build-js-client', 'build-js-server'], 'build-html', callback);
});

gulp.task('serve', callback => {
  runSequence('build', 'start', callback);
});
