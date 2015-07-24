(function(window) {
  'use strict';
  var app = window.app || {};
  app.bind = function(context, fnName) {
    var org = context[fnName];
    context[fnName] = function() {
      return org.apply(context);
    };
  };
  window.app = app;
})(window);
