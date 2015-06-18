'use strict';

var assert = require('assert');

describe('duplicate', function() {

    var path = require('path');
    var currying = require(path.resolve(process.cwd(), 'currying', 'index'));

    it('curries the function at least once', function() {
        var add = currying(function(a, b) {
            return a + b;
        });
        assert.equal(add(1)(2), 3, '一次柯里化验证失败');
    });

    it('curries the function until the arguments needed are given at least once', function() {
        var add = currying(function(a, b, c) {
            return a + b + c;
        });
        assert.equal(add(1, 2)(3), 6, '多参数一次柯里化验证失败');
    });

    it('curries the function until the arguments needed are given mutliple times', function() {
        var add = currying(function(a, b, c) {
            return a + b + c;
        });
        assert.equal(add(1)(2)(3), 6, '多参数多次柯里化验证失败');
    });

    it('doesn\'t share state between calls', function() {
        var add = currying(function(a, b, c) {
            return a + b + c;
        });
        assert.equal(add(1)(2)(3), 6, '多参数多次柯里化验证失败');
        assert.equal(add(2)(3)(4), 9, '多参数多次柯里化状态分离验证失败');
    });
});
