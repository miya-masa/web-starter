/* global describe, it, expect */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('bind関数', function() {
    var targetObj = {
      str: 'fix',
      func: function() {
        return this.str;
      }
    };
    var obj1 = {
      str: 'obj1'
    };

    var obj2 = {
      str: 'obj2'
    };

    var bindedObj = app.bind(targetObj, 'func');
    obj1.func = bindedObj.func;
    obj2.func = targetObj.func;

    expect(targetObj.func()).toBe('fix');
    expect(bindedObj.func()).toBe('fix');
    expect(obj1.func()).toBe('fix');
    expect(obj2.func()).toBe('obj2');
  });

});
