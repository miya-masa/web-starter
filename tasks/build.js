/*global -$ */
'use strict';
// generated on 2015-06-10 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build', ['jshint', 'html', 'extras'], function() {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});
