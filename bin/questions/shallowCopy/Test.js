'use strict';

var assert = require('assert');

describe('shallowCopy', function() {

    var path = require('path');
    var _ = require('lodash');
    var shallowCopy = require(path.resolve(process.cwd(), 'shallowCopy', 'index'));

    it('basic array copy', function() {
        var test = ['china', 'japan', 'america'];
        assert.deepEqual(shallowCopy(test), _.clone(test), '简单字符串数组浅拷贝错误');
    });

    it('basic object array', function() {
        var test = [{
            name: 'hello'
        }, {
            name: 'world'
        }];
        assert.deepEqual(shallowCopy(test), _.clone(test), '简单对象数组浅拷贝错误');
    });

    it('basic object array', function() {
        var test = [{
            name: 'north',
            value: 25
        }, {
            name: 'south',
            value: 90
        }];
        var copied = shallowCopy(test);
        copied[0].value = 789;
        assert.equal(copied[0].value, test[0].value, '浅拷贝不应该影响里面reference的值');
    });

});