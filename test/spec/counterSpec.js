/* global describe, it, expect */
describe('クロージャスコープを理解する', function() {
  'use strict';
  it('カウンタの実装', function() {
    var counter = app.getCounter();
    expect(1).toBe(counter());
    expect(2).toBe(counter());
    expect(3).toBe(counter());
  });

});
