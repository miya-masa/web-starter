(function(window) {
  'use strict';
  var app = window.app || {};
  app.bind = function(context, name) {
  app.bind
    return function() {
      return context[name].apply(context);
    };
  };
  window.app = app;
})(window);
