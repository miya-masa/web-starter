(function(window) {
  'use strict';
  var app = {};
  //カウンタを実装する
  app.getCounter = function() {
    var num = 0;
    return function() {
      num += 1;
      return num;
    };
  };
  window.app = app;
})(window);
