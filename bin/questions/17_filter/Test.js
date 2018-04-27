
const assert = require('assert');

describe('test basic filter', function() {

    let NativeFilter, calledNativeFilter;

    before(function() {
        NativeFilter = Array.prototype.filter;
        Array.prototype.filter = function() {
            calledNativeFilter = true;
            return NativeFilter.apply(this, arguments);
        };
    });

    const path = require('path');
    const filter = require(path.resolve(process.cwd(), 'filter', 'index'));

    it('should not use the native filter', function() {
        calledNativeFilter = false;
        filter(['x'], function(x) {
            return x;
        });
        assert(!calledNativeFilter);
    });

    it('basic test', function() {
        const array = [1, 2, 3];
        const isEven = function(item) {
            return item % 2 === 0;
        };
        assert.deepEqual(filter(array, isEven), [2], '基本测试失败');
    });

    it('should iterate objects of array', function() {
        const users = [
            {
                'user': 'barney',
                'age': 36,
                'active': true
            },
            {
                'user': 'fred',
                'age': 40,
                'active': false
            }
        ];

        const nonActive = function(item) {
            return !item.active;
        };

        assert.deepEqual(filter(users, nonActive), [
            {
                'user': 'fred',
                'age': 40,
                'active': false
            }
        ], 'iteratee测试测试失败');
    });

});
