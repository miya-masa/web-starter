(function(window) {
  'use strict';
  var app = window.app || {};
  //カウンタを実装する
  app.getCounter = function() {
    var counter = 0;
    return function() {
      return ++counter;
    };
  };
  window.app = app;
})(window);
