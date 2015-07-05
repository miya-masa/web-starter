/* global describe, it, expect, app */
xdescribe('実行コンテキストを強制する', function() {
  'use strict';
  it('bind関数', function() {
    // オブジェクトの準備
    var baseObj = {
      str: 'baseObj',
      fn: function() {
        return this.str;
      }
    };

    // baseObjからfn関数を呼び出す
    expect(baseObj.fn()).toBe('baseObj');

    var obj1 = {
      str: 'obj1'
    };

    //関数オブジェクトをobj1に紐づけ
    obj1.fn = baseObj.fn;

    // obj1からbaseObjのfn関数を呼び出す
    expect(obj1.fn()).toBe('obj1');

    // baseObjのfn関数のコンテキストを強制する
    app.bind(baseObj, 'fn');

    var obj2 = {
      str: 'obj2'
    };
    // obj2にバインド後のfnを紐づけ
    obj2.fn = baseObj.fn;
    // それぞれのfnを確認
    expect(obj1.fn()).toBe('obj1');
    expect(obj2.fn()).toBe('baseObj');
    expect(baseObj.fn()).toBe('baseObj');
  });

});
