/* global describe, it, expect */
describe('実行コンテキストを強制する', function() {
  'use strict';
  it('bind関数', function() {
    var targetFunction = function() {
      return this.str || 'default';
    }
    var obj1 = {
      str: 'obj1'
    };
    var obj2 = {
      str: 'obj2'
    };
    var obj3 = {
      str: 'obj3'
    };

    var bindedObj1 = app.bind(obj1, targetFunction);
    var bindedObj2 = app.bind(obj2, targetFunction);
    var bindedObj3 = app.bind(obj3, targetFunction);

    expect(bindedObj1()).toBe('obj1');
    expect(bindedObj2()).toBe('obj2');
    expect(bindedObj3()).toBe('obj3');
  });

});
