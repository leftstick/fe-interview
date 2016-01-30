'use strict';

var assert = require('assert');

describe('test basic once', function() {

    var path = require('path');
    var once = require(path.resolve(process.cwd(), 'once', 'index'));

    it('basic test', function() {
        var called = 0;
        var init = once(function() {
            return ++called;
        });
        init();
        init();
        init();
        assert.equal(called, 1, '基本测试失败');
    });

    it('will return the value from the original call for later calls', function() {
        var t = 10;
        var init = once(function() {
            return ++t;
        });
        var ret = init();
        assert.equal(init(), ret, '永远返回首次运行值测试失败');
        assert.equal(init(), ret, '永远返回首次运行值测试失败');
    });

    it('gets called with context', function() {
        var ctx;
        var init = once(function() {
            ctx = this;
        });
        init.call('TH');
        init.call(91);
        assert.equal(ctx, 'TH', '带上下文测试失败');
    });

    it('gets called with arguments', function() {
        var args;
        var init = once(function() {
            args = [].slice.call(arguments);
        });
        init('hello');
        init('world');
        assert.equal(args[0], 'hello', '参数不变测试失败');
    });

    it('used mulitple times', function() {
        var t = 0,
            m = 99;
        var init1 = once(function() {
            return t++;
        });
        var init2 = once(function() {
            return m++;
        });
        init1();
        init1();
        init2();
        init2();
        assert.equal(init1(), 0, '多次调用测试失败');
        assert.equal(init2(), 99, '多次调用测试失败');
    });

});
