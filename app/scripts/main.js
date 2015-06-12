/* jshint devel:true */
'use strict';

var globalOrLocal;
var test = 'test';

function globalScope() {
  return _.isUndefined(test);
}

function otherGlobalScope() {
  return _.isUndefined(test);
}

function implicitGlobalObject() {
  return test === window.test;
}

function localScope() {
  var variable = 'variable';

  function changeVariable() {
    var variable = 'changed';
    console.log(variable);
  }
  changeVariable();
  return variable;
}

function closureScope() {
  var variable = 'variable';

  function changeVariable() {
    variable = 'changed';
    console.log(variable);
  }
  changeVariable();
  return variable;
}

(function(window) {
  var globalOrLocal = 'globalOrLocal';
  window.immediatelyVariable = 'immediatelyVariable';
})(window);

function immediatelyVariable() {
  return _.isUndefined(immediatelyVariable);
}

function checkImmediatelyGlobal() {
  return immediatelyVariable === window.immediatelyVariable;
}
