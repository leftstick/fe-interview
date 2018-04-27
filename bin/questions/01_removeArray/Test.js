const assert = require('assert');

describe('duplicate', function() {

    const path = require('path');
    const removeArray = require(path.resolve(process.cwd(), 'removeArray', 'index'));

    it('delete the first element', function() {
        const arr = [
            'nan',
            'bei',
            'xi',
            'dong'
        ];
        removeArray(arr, 0);
        assert.deepEqual(arr, ['bei', 'xi', 'dong'], '删除第0个元素失败');
    });

    it('delete the third element', function() {
        const arr = [
            'nan',
            'bei',
            'xi',
            'dong'
        ];
        removeArray(arr, 2);
        assert.deepEqual(arr, ['nan', 'bei', 'dong'], '删除第2个元素失败');
    });

    it('delete the element which doesn\'t exist', function() {
        const arr = [
            'nan',
            'bei',
            'xi',
            'dong'
        ];
        removeArray(arr, 99);
        assert.deepEqual(arr, [
            'nan',
            'bei',
            'xi',
            'dong'
        ], '删除一个不存在的元素应该对原数组没有任何影响');
    });
});
