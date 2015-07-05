/* global describe, it, expect */
xdescribe('実行コンテキストを強制する', function() {
  'use strict';
  it('wrap関数', function() {
    var measure = function(orgFunc) {
      var startTime = new Date();
      // ラッパー対象の関数
      var result = orgFunc();
      console.log((new Date() - startTime) + 'ms');
      console.log('result:' + result);
      return result;
    };

    var target = new app.Test('John', 10);
    var sum10 = target.sum();
    //通常実行
    expect(sum10).toBe(55);

    //wrap実行
    var wrapSum10 = app.wrap(target, 'sum', measure);
    expect(wrapSum10).toBe(55);


    //wrap実行その二
    var target2 = new app.Test('John', 10000000);
    var wrapSum10000000 = app.wrap(target2, 'sum', measure);
    expect(wrapSum10000000).toBe(50000005000000);

  });
});
