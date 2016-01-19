'use strict';

var assert = require('assert');

describe('_.reduce', function() {

    var NativeReduce, calledNativeReduce;

    before(function() {
        NativeReduce = Array.prototype.reduce;
        Array.prototype.reduce = function() {
            calledNativeReduce = true;
            return NativeReduce.apply(this, arguments);
        };
    });

    var path = require('path');
    var reduce = require(path.resolve(process.cwd(), 'reduce', 'index'));

    it('should not use the native reduce', function() {
        calledNativeReduce = false;
        reduce(['x'], function(x) {
            return x;
        });
        assert(!calledNativeReduce);
    });

    it('basic test', function() {
        var test = [1, 2, 3];
        var actual = reduce(test, function(previous, i) {
            return previous + i;
        });
        assert.equal(actual, 6, '基本测试用例失败');
    });

    it('test context', function() {
        var test = [
            {
                city: 'Shanghai',
                population: 25000000
            },
            {
                city: 'Beijing',
                population: 30000000
            }
        ];
        var actual = reduce(test, function(previous, i) {
            return previous + i.city + ' ';
        }, 'Hi ');
        assert.equal(actual, 'Hi Shanghai Beijing ', '初始值测试失败');
    });

});
