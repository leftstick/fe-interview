'use strict';

var assert = require('assert');

describe('test basic times', function() {

    var path = require('path');
    var times = require(path.resolve(process.cwd(), 'times', 'index'));

    it('basic test', function() {
        assert.deepEqual(times(2, String), ['0', '1'], '基本测试失败');
    });

    it('test with Boolean', function() {
        assert.deepEqual(times(3, Boolean), [
            false,
            true,
            true
        ], 'Boolean值测试测试失败');
    });

    it('test without index involved', function() {
        assert.deepEqual(times(5, function() {
            return 'Hi';
        }), [
            'Hi',
            'Hi',
            'Hi',
            'Hi',
            'Hi'
        ], '不使用index测试失败');
    });

});
