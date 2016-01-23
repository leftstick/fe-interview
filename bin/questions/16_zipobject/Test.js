'use strict';

var assert = require('assert');

describe('test basic zipobject', function() {

    var path = require('path');
    var zipobject = require(path.resolve(process.cwd(), 'zipobject', 'index'));

    it('basic test', function() {
        var arr1 = ['barney', 'fred'];
        var arr2 = [36, 40];
        var zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {barney: 36, fred: 40}, '基本测试失败');
    });

    it('ignore extra values', function() {
        var arr1 = ['a'];
        var arr2 = [1, 2];
        var zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {a: 1}, '如果没有对应值，忽略额外key测试失败');
    });

    it('should assign `undefined` values for extra `keys`', function() {
        var arr1 = ['a', 'b'];
        var arr2 = [1];
        var zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {'a': 1, 'b': undefined}, '没有值时，默认赋值undefined测试失败');
    });

});
