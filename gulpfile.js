/*global -$ */
'use strict';
// generated on 2015-06-10 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./tasks', {
  recurse: true
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
