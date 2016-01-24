'use strict';

var assert = require('assert');

describe('test basic findmost', function() {

    var path = require('path');
    var findmost = require(path.resolve(process.cwd(), 'findmost', 'index'));

    it('basic test', function() {
        var arr1 = [
            'nan',
            'feng',
            'hao',
            'li',
            'feng',
            'feng',
            'li'
        ];

        var res = findmost(arr1);
        assert.equal(res, 'feng', '基本测试失败');
    });

    it('with object', function() {
        var arr1 = [{name: 'SX'}, {name: 'SH'}, {name: 'SX'}];

        var res = findmost(arr1, function(item) {
            return item.name;
        });
        assert.deepEqual(res, {name: 'SX'}, '对象测试失败');
    });

});
