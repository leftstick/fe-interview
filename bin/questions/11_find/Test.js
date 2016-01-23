'use strict';

var assert = require('assert');

describe('test basic find', function() {

    var NativeFind, calledNativeFind;

    before(function() {
        NativeFind = Array.prototype.find;
        Array.prototype.find = function() {
            calledNativeFind = true;
            return NativeFind.apply(this, arguments);
        };
    });

    var path = require('path');
    var find = require(path.resolve(process.cwd(), 'find', 'index'));

    it('should not use the native find', function() {
        calledNativeFind = false;
        find(['x'], function(x) {
            return x;
        });
        assert(!calledNativeFind);
    });

    it('basic test', function() {
        var arr1 = [
            'nan',
            'feng',
            'hao',
            'li'
        ];

        var res = find(arr1, function(i) {
            return i === 'hao';
        });
        assert.equal(res, 'hao', '基本测试失败');
    });

    it('only first matched element should returned', function() {
        var arr1 = [
            1,
            2,
            4,
            5,
            6
        ];

        var res = find(arr1, function(i) {
            return i < 5;
        });
        assert.equal(res, 1, '必须返回第一个匹配元素');
    });

    it('object array should also work', function() {
        var arr1 = [
            {
                name: 'HanMeimei'
            },
            {
                name: 'LiLei'
            },
            {
                name: 'ErDan'
            }
        ];

        var res = find(arr1, function(i) {
            return i.name === 'ErDan';
        });
        assert.deepEqual(res, {name: 'ErDan'}, '对象元素测试失败');
    });

});
