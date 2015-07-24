(function(window) {
  'use strict';
  var app = window.app || {};

  app.wrap = function(context, fnName, wrapperFunc) {
    app.bind(context, fnName);
    return wrapperFunc.call(context, context[fnName]);
  };

  window.app = app;
})(window);
