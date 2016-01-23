'use strict';

var assert = require('assert');

describe('test basic difference', function() {

    var path = require('path');
    var difference = require(path.resolve(process.cwd(), 'difference', 'index'));

    it('basic test', function() {
        var arr1 = ['nan', 'feng', 'hao'];
        var arr2 = ['aa', 'xiao', 'hao'];

        var res = difference(arr1, arr2);
        assert.deepEqual(res, ['nan', 'feng'], '基本测试失败');
    });

    it('should match NaN', function() {
        var arr1 = [1, NaN, 3];
        var arr2 = [NaN, 5, NaN];

        var res = difference(arr1, arr2);
        assert.deepEqual(res, [1, 3], 'NaN匹配测试失败');
    });

});
