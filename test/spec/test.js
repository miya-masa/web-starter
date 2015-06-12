/* global describe, it, expect */
describe('変数のスコープを知る', function() {
  'use strict';
  it('グローバルスコープを確認する', function() {
    expect(false).toBe(globalScope());
    expect(false).toBe(otherGlobalScope());
  });

  it('暗黙グローバルオブジェクトを確認する', function() {
    expect(true).toBe(implicitGlobalObject());
  });

  it('ローカルスコープを確認する', function() {
    expect('variable').toBe(localScope());
  });

  it('クロージャスコープを確認する', function() {
    expect('changed').toBe(closureScope());
  });
  it('即時関数実行内の変数', function() {
    expect(undefined).toBe(globalOrLocal);
  });
});
