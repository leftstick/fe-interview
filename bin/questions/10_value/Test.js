const assert = require('assert');

describe('test value functionality', function() {

    const path = require('path');
    const value = require(path.resolve(process.cwd(), 'value', 'index'));

    it('basic test', function() {
        assert.equal(value(2), 2, '简单数值验证失败');
    });

    it('test function', function() {
        const fn = function() {
            return 3;
        };
        assert.equal(value(fn), 3, '简单方法验证失败');
    });

    it('test nested functions', function() {
        const fn = function() {
            return function() {
                return 'Hello';
            };
        };
        assert.equal(value(fn), 'Hello', '嵌套方法验证失败');
    });

    it('test nested functions WOW!', function() {
        const fn = function() {
            return function() {
                return function() {
                    return function() {
                        return function() {
                            return [1, 2];
                        };
                    };
                };
            };
        };
        assert.deepEqual(value(fn), [1, 2], '多层嵌套验证失败');
    });

});
