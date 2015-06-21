/* global describe, it, expect */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('wrapper関数', function() {
    var wrapper = function(orgFunc) {
      var startTime = new Date();
      orgFunc();
      console.log((new Date() - startTime) + 'ms');
    };

    var Test = function(name, maxNum) {
      this.name = name;
      this.maxNum = maxNum;
    };
    Test.prototype.hello = function() {
      console.log('Hello ' + this.name + '!!!');
    };
    Test.prototype.sum = function() {
      var sum = 0;
      for (var i = 1; i <= this.maxNum; i++) {
        sum += i;
      }
      console.log(sum);
    };

    var target = new Test('John', 10);
    target.sum();
    app.wrap(target, 'sum', wrapper);
    var target2 = new Test('John', 10000000);
    app.wrap(target2, 'sum', wrapper);
  });
});
