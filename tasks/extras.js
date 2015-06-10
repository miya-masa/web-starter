/*global -$ */
'use strict';
// generated on 2015-06-10 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});
