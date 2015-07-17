/* global describe, it, expect */
describe('変数のスコープを知る', function() {
  'use strict';

  it('グローバルスコープを確認する', function() {
    // 定義された関数で見えるか
    expect(globalScope()).toBe(false);
    // 他の関数でもグローバルスコープが見えるか
    expect(otherGlobalScope()).toBe(false);
  });

  it('暗黙グローバルオブジェクトを確認する', function() {
    expect(implicitGlobalObject()).toBe(true);
  });

  it('ローカルスコープを確認する', function() {
    expect(localScope()).toBe('variable');
  });

  it('クロージャスコープを確認する', function() {
    expect(closureScope()).toBe('changed');
  });

  it('即時関数実行内の変数', function() {
    expect(globalOrLocal).toBe(undefined);
  });

  it('即時実行関数内からグローバルへ紐付け', function() {
    expect(getImmediatelyVariable()).toBe(false);
    expect(checkImmediatelyGlobal()).toBe(true);
  });

  it('ホイスティングの確認', function() {
    var fn = function(variable) {
      expect(variable).toBe('variable');
      var variable = 'innerVariable';
      console.log(variable);
      expect(variable).toBe('innerVariable');
    };
    fn('variable');
  });

  it('ホイスティングの確認(クロージャ)', function() {
    var variable = 'variable';
    var fn = function() {
      expect(variable).toBe(undefined);
      var variable = 'innerVariable';
      console.log(variable);
      expect(variable).toBe('innerVariable');
    };
    fn();
  });

});
