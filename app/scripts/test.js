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

  //1 から maxNumまでを足す
  Test.prototype.sum = function() {
    var sum = 0;
    for (var i = 1; i <= this.maxNum; i++) {
      sum += i;
    }
    return sum;
  };

  app.Test = Test;
  window.app = app;
})(window);
