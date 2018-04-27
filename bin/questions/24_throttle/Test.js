
const assert = require('assert');
const sinon = require('sinon');

describe('test throttle functionality', function() {

    const path = require('path');
    let clock;
    const throttle = require(path.resolve(process.cwd(), 'throttle', 'index'));

    beforeEach(function() {
        clock = sinon.useFakeTimers();
    });

    afterEach(function() {
        clock.restore();
    });

    it('basic test', function() {
        let passed = false;
        const throttled = throttle(function() {
            passed = true;
        }, 10);
        throttled();
        assert(passed);
        clock.tick(11);
    });

    it('execute only once within the threshold', function(done) {
        let called = 0;
        const throttled = throttle(function() {
            called++;
        }, 10);
        throttled();
        throttled();
        throttled();
        setTimeout(function() {
            assert.equal(called, 1, '阀值内方法仅会调用一次测试失败');
            done();
        }, 5);
        clock.tick(11);
    });

    it('will execute the last call if the previous threshold passed', function(done) {
        let called = 0;
        const throttled = throttle(function() {
            called++;
        }, 10);
        throttled();
        throttled();
        throttled();
        setTimeout(function() {
            assert.equal(called, 2, '阀值内的最后一次调用，会在前次阀值过期后执行测试失败');
            done();
        }, 15);
        clock.tick(20);
    });

    it('executed every threshold ms', function(done) {
        const startTime = new Date();
        const calledTimes = [];
        const throttled = throttle(function() {
            calledTimes.push(new Date() - startTime);
        }, 10);
        throttled(); //start now
        const interval = setInterval(throttled, 1);
        setTimeout(function() {
            clearInterval(interval);
            assert.deepEqual(calledTimes, [
                0,
                11,
                22,
                33,
                44,
                55
            ], '每隔固定的阀值期，都会执行一次测试失败');
            done();
        }, 59);
        clock.tick(60);
    });

    it('executed with context specified', function() {
        let ctx;
        const throttled = throttle(function() {
            ctx = this;
        }, 10);
        throttled.call({name: 'wo'});
        assert.deepEqual(ctx, {name: 'wo'}, '指定上下文测试失败');
    });

    it('executed with arguments', function() {
        let args;
        const throttled = throttle(function() {
            args = [].slice.call(arguments);
        }, 10);
        throttled('Dongbei', [1, 2]);
        assert.deepEqual(args, ['Dongbei', [1, 2]], '指定参数调用测试失败');
    });

    it('executed with the later arguments', function(done) {
        let args;
        const throttled = throttle(function() {
            args = [].slice.call(arguments);
        }, 10);
        throttled('Shang', 'Hai');
        throttled('Tian', 'Jin');
        throttled('Bei', 'Jing');
        setTimeout(function() {
            assert.deepEqual(args, ['Bei', 'Jing']);
            done();
        }, 15);
        clock.tick(16);
    });

    it('multiple throttled funcs should be isolated with each other', function() {
        let args1,
            args2;
        const throttled1 = throttle(function() {
            args1 = [].slice.call(arguments);
        }, 10);

        const throttled2 = throttle(function() {
            args2 = [].slice.call(arguments);
        }, 10);
        throttled1('Shang', 'Hai');
        throttled2('Tian', 'Jin');
        assert.deepEqual(args1, ['Shang', 'Hai'], '多节流阀函数隔离测试失败');
        assert.deepEqual(args2, ['Tian', 'Jin'], '多节流阀函数隔离测试失败');
    });

    it('multiple throttled funcs should be isolated with each other 2', function(done) {
        let args1,
            called1 = 0,
            args2,
            called2 = 0;
        const throttled1 = throttle(function() {
            called1++;
            args1 = [].slice.call(arguments);
        }, 10);

        const throttled2 = throttle(function() {
            called2++;
            args2 = [].slice.call(arguments);
        }, 10);
        throttled1('Shang', 'Hai');
        throttled1({say: 'hi'});
        throttled2('Tian', 'Jin');
        setTimeout(function() {
            assert.equal(called1, 2);
            assert.deepEqual(args1[0], {say: 'hi'}, '多节流阀多调用隔离测试失败');
            assert.deepEqual(args2, ['Tian', 'Jin']);
            done();
        }, 11);
        clock.tick(12);
    });

});
