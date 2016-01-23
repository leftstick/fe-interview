'use strict';

var assert = require('assert');

describe('duplicate', function() {

    var path = require('path');
    var duplicate = require(path.resolve(process.cwd(), 'duplicate', 'index'));

    it('basic test', function() {
        var arr = [
            8,
            2,
            16,
            90,
            55,
            9911
        ];
        assert.deepEqual(duplicate(arr), arr.concat(arr), '基本测试失败');
    });
});
