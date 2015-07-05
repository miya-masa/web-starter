/* global describe, it, expect, app */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('bind関数', function() {
    var targetObj = {
      str: 'targetObj',
      fn: function() {
        return this.str;
      }
    };
    var obj1 = {
      str: 'obj1'
    };
    var obj2 = {
      str: 'obj2'
    };

    obj1.fn = targetObj.fn;

    expect(obj1.fn()).toBe('obj1');
    expect(targetObj.fn()).toBe('targetObj');

    app.bind(targetObj, 'fn');

    obj2.fn = targetObj.fn;
    expect(obj1.fn()).toBe('obj1');
    expect(obj2.fn()).toBe('targetObj');
    expect(targetObj.fn()).toBe('targetObj');
  });

});
