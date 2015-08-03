(function(window) {
  'use strict';
  var app = window.app || {};

  //ラップ関数
  //特定の関数に対して前後に処理を挟みたいときに利用する
  app.wrap = function(context, fnName, wrapperFunc) {
    // 元の関数をバインドする
    // 先に読み込まれていればapp.bindでもOK
    var fn = context[fnName];
    var orgFunc = function() {
      return fn.call(context);
    };
    // 引数の関数に対して呼び出しをする
    return wrapperFunc(orgFunc);
  };

  window.app = app;
})(window);
