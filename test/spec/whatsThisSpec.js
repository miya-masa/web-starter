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

  it('callとapply', function() {
    var whatsThis = app.whatsThis;
    var otherObj = {};

    var whatsThis1 = whatsThis.call(otherObj)
    var whatsThis2 = whatsThis.apply(otherObj)

    expect(whatsThis1).toBe(otherObj);
    expect(whatsThis2).toBe(otherObj);
  });

  it('インスタンスのthis', function() {

    var MyClass = function() {};
    MyClass.prototype.whatsThis = function() {
      return this;
    }
    var otherObj = {
      otherObj: 'otherObj'
    };

    var myObj = new MyClass();
    expect(myObj.whatsThis()).toBe(myObj);
    expect(myObj.whatsThis.call(otherObj)).toBe(otherObj);
  });

});
