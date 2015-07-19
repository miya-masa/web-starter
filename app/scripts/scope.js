/* jshint undef: false, unused: false, strict: false */
/* global _,immediatelyVariable */

var globalOrLocal;
var test = 'test';

function whatIsGlobalThis() {
  return this === window;
}

//グローバルスコープが関数の中で見えるか
function globalScope() {
  return _.isUndefined(test);
}

//グローバルスコープが関数の中で見えるか
function otherGlobalScope() {
  return _.isUndefined(test);
}

//グローバルに定義されている変数がwindowに紐づくかどうか
function implicitGlobalObject() {
  return test === window.test;
}

// 関数内で定義された変数の優先順位
function localScope() {
  var variable = 'variable';

  function changeVariable() {
    var variable = 'changed';
    console.log(variable);
  }
  changeVariable();
  return variable;
}

// 関数内で定義された変数の優先順位
function closureScope() {
  var variable = 'variable';

  function changeVariable() {
    variable = 'changed';
    console.log(variable);
  }
  changeVariable();
  return variable;
}

//即時実行関数内で定義された変数
(function(window) {
  var globalOrLocal = 'globalOrLocal';
  window.immediatelyVariable = 'immediatelyVariable';
})(window);

//即時実行関数内で定義された変数
function getImmediatelyVariable() {
  return _.isUndefined(immediatelyVariable);
}

//即時実行関数内で定義された変数
function checkImmediatelyGlobal() {
  return immediatelyVariable === window.immediatelyVariable;
}
