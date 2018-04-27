'use strict';

const assert = require('assert');

describe('test basic once', function() {

    const path = require('path');
    const once = require(path.resolve(process.cwd(), 'once', 'index'));

    it('basic test', function() {
        let called = 0;
        const init = once(function() {
            return ++called;
        });
        init();
        init();
        init();
        assert.equal(called, 1, '基本测试失败');
    });

    it('will return the value from the original call for later calls', function() {
        let t = 10;
        const init = once(function() {
            return ++t;
        });
        const ret = init();
        assert.equal(init(), ret, '永远返回首次运行值测试失败');
        assert.equal(init(), ret, '永远返回首次运行值测试失败');
    });

    it('gets called with context', function() {
        let ctx;
        const init = once(function() {
            ctx = this;
        });
        init.call('TH');
        init.call(91);
        assert.equal(ctx, 'TH', '带上下文测试失败');
    });

    it('gets called with arguments', function() {
        let args;
        const init = once(function() {
            args = [].slice.call(arguments);
        });
        init('hello');
        init('world');
        assert.equal(args[0], 'hello', '参数不变测试失败');
    });

    it('used mulitple times', function() {
        let t = 0,
            m = 99;
        const init1 = once(function() {
            return t++;
        });
        const init2 = once(function() {
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
