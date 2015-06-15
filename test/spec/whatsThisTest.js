/* global describe, it, expect,app */
describe('WhatsThis', function() {
  'use strict';
  it('thisとはなんでしょうか？', function() {
    var whatsThis = app.whatsThis;
    var obj = {};
    obj.whatsThis = app.whatsThis;

    function whats() {
      return this;
    }

    var whatsThis1 = app.whatsThis();
    var whatsThis2 = whatsThis();
    var whatsThis3 = obj.whatsThis();
    var whatsThis4 = whats();
    expect(whatsThis1).toBe(app);
    expect(whatsThis2).toBe(undefined);
    expect(whatsThis3).toBe(obj);
    expect(whatsThis4).toBe(undefined);
  });
});
