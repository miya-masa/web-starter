/* global describe, it, expect */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('bind関数', function() {
    var targetObj = {
      str: 'targetObj',
      targetFunction: function() {
        return this.str;
      }
    };
    var obj1 = {
      str: 'obj1'
    };
    obj1.targetFunction = targetObj.targetFunction
    var obj2 = {
      str: 'obj2'
    };

    expect(obj1.targetFunction()).toBe('obj1');
    expect(targetObj.targetFunction()).toBe('targetObj');

    app.bind(targetObj, 'targetFunction');

    obj2.targetFunction = targetObj.targetFunction;
    expect(obj1.targetFunction()).toBe('obj1');
    expect(obj2.targetFunction()).toBe('targetObj');
    expect(targetObj.targetFunction()).toBe('targetObj');

  });

});
