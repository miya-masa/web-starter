/* global describe, it, expect */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('wrapper関数', function() {
    var wrapper = function(orgFunc) {
      var startTime = new Date();
      orgFunc();
      console.log((new Date() - startTime) + 'ms');
    };
    var target = new app.Test('John', 10);
    target.sum();
    app.wrap(target, 'sum', wrapper);
    var target2 = new Test('John', 10000000);
    app.wrap(target2, 'sum', wrapper);
  });
});
