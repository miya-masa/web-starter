/* global describe, it, expect,app */
xdescribe('WhatsThis', function() {
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
    expect(whatsThis1).toBe(/* Question */);
    expect(whatsThis2).toBe(/* Question */);
    expect(whatsThis3).toBe(/* Question */);
    expect(whatsThis4).toBe(/* Question */);

  });

  it('callとapply', function() {
    var whatsThis = app.whatsThis;
    var otherObj = {};

    var whatsThis1 = whatsThis.call(otherObj)
    var whatsThis2 = whatsThis.apply(otherObj)

    expect(whatsThis1).toBe(/* Question */);
    expect(whatsThis2).toBe(/* Question */);
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
    expect(myObj.whatsThis()).toBe(/* Question */);
    expect(myObj.whatsThis.call(otherObj)).toBe(/* Question */);
  });

});
