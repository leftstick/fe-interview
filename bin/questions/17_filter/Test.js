'use strict';

var assert = require('assert');

describe('test basic filter', function() {

    var NativeFilter, calledNativeFilter;

    before(function() {
        NativeFilter = Array.prototype.filter;
        Array.prototype.filter = function() {
            calledNativeFilter = true;
            return NativeFilter.apply(this, arguments);
        };
    });

    var path = require('path');
    var filter = require(path.resolve(process.cwd(), 'filter', 'index'));

    it('should not use the native filter', function() {
        calledNativeFilter = false;
        filter(['x'], function(x) {
            return x;
        });
        assert(!calledNativeFilter);
    });

    it('basic test', function() {
        var array = [1, 2, 3];
        var isEven = function(item) {
            return item % 2 === 0;
        };
        assert.deepEqual(filter(array, isEven), [2], '基本测试失败');
    });

    it('should iterate objects of array', function() {
        var users = [
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

        var nonActive = function(item) {
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
