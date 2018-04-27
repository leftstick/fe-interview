const assert = require('assert');

describe('test basic difference', function() {

    const path = require('path');
    const difference = require(path.resolve(process.cwd(), 'difference', 'index'));

    it('basic test', function() {
        const arr1 = ['nan', 'feng', 'hao'];
        const arr2 = ['aa', 'xiao', 'hao'];

        const res = difference(arr1, arr2);
        assert.deepEqual(res, ['nan', 'feng'], '基本测试失败');
    });

    it('should match NaN', function() {
        const arr1 = [1, NaN, 3];
        const arr2 = [NaN, 5, NaN];

        const res = difference(arr1, arr2);
        assert.deepEqual(res, [1, 3], 'NaN匹配测试失败');
    });

    it('should match NaN2', function() {
        const arr1 = [1, NaN, 3];
        const arr2 = [5, 'k'];

        const res = difference(arr1, arr2);
        assert.equal(res.toString(), '1,NaN,3', 'NaN2匹配测试失败');
    });

});
