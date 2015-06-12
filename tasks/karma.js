/*global -$ */
'use strict';
// generated on 2015-06-10 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('karma', ['html'], function(done) {
  karma.start({
    configFile: __dirname + '/../karma.conf.js'
  }, done);
});
