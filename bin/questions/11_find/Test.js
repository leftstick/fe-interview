const assert = require('assert');

describe('test basic find', function() {

    let NativeFind, calledNativeFind;

    before(function() {
        NativeFind = Array.prototype.find;
        Array.prototype.find = function() {
            calledNativeFind = true;
            return NativeFind.apply(this, arguments);
        };
    });

    const path = require('path');
    const find = require(path.resolve(process.cwd(), 'find', 'index'));

    it('should not use the native find', function() {
        calledNativeFind = false;
        find(['x'], function(x) {
            return x;
        });
        assert(!calledNativeFind);
    });

    it('basic test', function() {
        const arr1 = [
            'nan',
            'feng',
            'hao',
            'li'
        ];

        const res = find(arr1, function(i) {
            return i === 'hao';
        });
        assert.equal(res, 'hao', '基本测试失败');
    });

    it('only first matched element should returned', function() {
        const arr1 = [
            1,
            2,
            4,
            5,
            6
        ];

        const res = find(arr1, function(i) {
            return i < 5;
        });
        assert.equal(res, 1, '必须返回第一个匹配元素');
    });

    it('object array should also work', function() {
        const arr1 = [
            {
                name: 'HanMeimei'
            },
            {
                name: 'LiLei'
            },
            {
                name: 'ErDan'
            }
        ];

        const res = find(arr1, function(i) {
            return i.name === 'ErDan';
        });
        assert.deepEqual(res, {name: 'ErDan'}, '对象元素测试失败');
    });

});
