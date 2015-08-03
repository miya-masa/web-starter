(function(window) {
  'use strict';
  var app = window.app || {};
  //bind関数。contextのプロパティfnNameに対して
  //thisを強制する
  app.bind = function(context, fnName) {
    // 循環参照にならないように一度関数を変数として切り出す
    var fn = context[fnName];
    // contextの対象となる関数を上書きする
    context[fnName] = function() {
      // クロージャスコープのfnをコンテキストを強制して呼び出し
      return fn.call(context);
    };
  };
  window.app = app;
})(window);
