'use strict';

var assert = require('assert');

describe('isString', function() {

    var path = require('path');
    var isString = require(path.resolve(process.cwd(), 'isString', 'index'));

    it('basic test', function() {
        var test = 'hello';
        assert(isString(test), '原始string类型校验失败');
    });

    it('basic number', function() {
        var test = 12445;
        assert.equal(isString(test), false, '原始数值类型校验失败');
    });

    it('basic undefined', function() {
        assert.equal(isString(undefined), false, '未初始化变量校验失败');
    });

    it('basic null', function() {
        assert.equal(isString(null), false, '空值校验失败');
    });

    it('basic new String', function() {
        assert(isString(new String('hello')), '字符串对象校验失败');
    });
});