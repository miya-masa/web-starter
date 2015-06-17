(function(window) {
  'use strict';
  var app = window.app || {};
  app.bind = function(context, fn) {
    return function() {
      return fn.apply(context);
    }
  };
  window.app = app;
})(window);
