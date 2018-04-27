
const assert = require('assert');

describe('shallowCopy', function() {

    const path = require('path');
    const _ = require('lodash');
    const shallowCopy = require(path.resolve(process.cwd(), 'shallowCopy', 'index'));

    it('basic array copy', function() {
        const test = ['china', 'japan', 'america'];
        assert.equal(shallowCopy(test).length, test.length, '简单数组对象不可枚举属性length错误');
        assert.equal(Array.isArray(shallowCopy(test)), true, '简单数组浅拷贝错误，返回值不是数组对象');
        assert.deepEqual(shallowCopy(test), _.clone(test), '简单数组浅拷贝错误，内容错误');
    });

    it('basic object array', function() {
        const test = [{
            name: 'hello'
        }, {
            name: 'world'
        }];
        assert.deepEqual(shallowCopy(test), _.clone(test), '简单对象数组浅拷贝错误，内容错误');
    });

    it('basic object array', function() {
        const test = [{
            name: 'north',
            value: 25
        }, {
            name: 'south',
            value: 90
        }];
        const copied = shallowCopy(test);
        copied[0].value = 789;
        assert.equal(copied[0].value, test[0].value, '浅拷贝不应该影响里面reference的值');
    });

    it('basic object', function() {
        const test = {
            name: 'north',
            value: 25
        };
        assert.equal(shallowCopy(test).length, undefined, '简单对象浅拷贝错误，对象不应该拥有length属性');
        assert.deepEqual(shallowCopy(test), _.clone(test), '简单对象浅拷贝错误，内容错误');
    });
});
