
const assert = require('assert');

describe('_.map', function() {

    let NativeMap, calledNativeMap;

    before(function() {
        NativeMap = Array.prototype.map;
        Array.prototype.map = function() {
            calledNativeMap = true;
            return NativeMap.apply(this, arguments);
        };
    });

    const path = require('path');
    const map = require(path.resolve(process.cwd(), 'map', 'index'));

    it('should not use the native map', function() {
        calledNativeMap = false;
        map(['x'], function(x) {
            return x;
        });
        assert(!calledNativeMap);
    });

    it('basic test', function() {
        const test = [1, 2, 3];
        const actual = map(test, function(i) {
            return i + 1;
        });
        assert.deepEqual(actual, [2, 3, 4], '基本测试用例失败');
    });

    it('test context', function() {
        const test = [
            {
                city: 'Shanghai',
                population: 25000000
            },
            {
                city: 'Beijing',
                population: 30000000
            }
        ];
        const actual = map(test, function(i) {
            return i.population / this;
        }, 10);
        assert.deepEqual(actual, [2500000, 3000000], '上下文环境基本测试失败');
    });

});
