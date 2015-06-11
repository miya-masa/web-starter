/* global describe, it */
describe('変数のスコープを知る', function() {
  it('グローバルスコープ', function() {
    expect(true).toBe(isImplicitGlobal());
  });
});
