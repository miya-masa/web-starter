(function(window) {
  'use strict';
  var app = window.app || {};
  var Test = function(name, maxNum) {
    this.name = name;
    this.maxNum = maxNum;
  };

  Test.prototype.hello = function() {
    console.log('Hello ' + this.name + '!!!');
  };
  Test.prototype.sum = function() {
    var sum = 0;
    for (var i = 1; i <= this.maxNum; i++) {
      sum += i;
    }
    console.log(sum);
  };

  app.Test = Test;
  window.app = app;
})(window);
