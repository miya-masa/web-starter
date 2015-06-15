(function(window) {
  'use strict';

  var app = {};

  app.whatsThis = function() {
    return this;
  };
  app.whatsThisThis = function() {
    return window;
  };
  window.app = app;
})(window);
