const assert = require('assert');

describe('test basic flatmap', function() {

    const path = require('path');
    const flatmap = require(path.resolve(process.cwd(), 'flatmap', 'index'));

    it('basic test', function() {
        const arr1 = ['barney', 'fred'];
        const iteratee = function(x, index) {
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
        const arr1 = [99, 77];
        const iteratee = function(x, index) {
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
