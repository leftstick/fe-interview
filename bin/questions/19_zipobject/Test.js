const assert = require('assert');

describe('test basic zipobject', function() {

    const path = require('path');
    const zipobject = require(path.resolve(process.cwd(), 'zipobject', 'index'));

    it('basic test', function() {
        const arr1 = ['barney', 'fred'];
        const arr2 = [36, 40];
        const zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {barney: 36, fred: 40}, '基本测试失败');
    });

    it('ignore extra values', function() {
        const arr1 = ['a'];
        const arr2 = [1, 2];
        const zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {a: 1}, '如果没有对应值，忽略额外key测试失败');
    });

    it('should assign `undefined` values for extra `keys`', function() {
        const arr1 = ['a', 'b'];
        const arr2 = [1];
        const zipped = zipobject(arr1, arr2);
        assert.deepEqual(zipped, {'a': 1, 'b': undefined}, '没有值时，默认赋值undefined测试失败');
    });

});
