'use strict';

var assert = require('assert');

describe('test basic flatmap', function() {

    var path = require('path');
    var flatmap = require(path.resolve(process.cwd(), 'flatmap', 'index'));

    it('basic test', function() {
        var arr1 = ['barney', 'fred'];
        var iteratee = function(x, index) {
            return [x, index];
        };
        assert.deepEqual(flatmap(arr1, iteratee), [
            'barney',
            0,
            'fred',
            1
        ], '基本测试失败');
    });

    it('multiple elements test', function() {
        var arr1 = [99, 77];
        var iteratee = function(x, index) {
            return [x, x + index, x * index];
        };
        assert.deepEqual(flatmap(arr1, iteratee), [
            99,
            99,
            0,
            77,
            78,
            77
        ], '多元素测试失败');
    });

});
