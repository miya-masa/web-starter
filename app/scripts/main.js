/* jshint devel:true */

test = 'test';

function isImplicitGlobal() {
  return test === window.test;
}

(function(window) {
})(window);
