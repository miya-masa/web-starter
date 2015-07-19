/* global describe, it, expect */
xdescribe('変数のスコープを知る', function() {
  'use strict';

  it('グローバルスコープを確認する', function() {
    // 定義された関数で見えるか
    expect(globalScope()).toBe(/* Question */);
    // 他の関数でもグローバルスコープが見えるか
    expect(otherGlobalScope()).toBe(/* Question */);
  });

  it('暗黙グローバルオブジェクトを確認する', function() {
    expect(implicitGlobalObject()).toBe(/* Question */);
  });

  it('ローカルスコープを確認する', function() {
    expect(localScope()).toBe(/* Question */);
  });

  it('クロージャスコープを確認する', function() {
    expect(closureScope()).toBe(/* Question */);
  });

  it('即時関数実行内の変数', function() {
    expect(globalOrLocal).toBe(/* Question */);
  });

  it('即時実行関数内からグローバルへ紐付け', function() {
    expect(getImmediatelyVariable()).toBe(/* Question */);
    expect(checkImmediatelyGlobal()).toBe(/* Question */);
  });

  it('ホイスティングの確認', function() {
    var fn = function(variable) {
      expect(variable).toBe(/* Question */);
      var variable = 'innerVariable';
      console.log(variable);
      expect(variable).toBe(/* Question */);
    };
    fn('variable');
  });

  it('ホイスティングの確認(クロージャ)', function() {
    var variable = 'variable';
    var fn = function() {
      expect(variable).toBe(/* Question */);
      var variable = 'innerVariable';
      console.log(variable);
      expect(variable).toBe(/* Question */);
    };
    fn();
  });

});
