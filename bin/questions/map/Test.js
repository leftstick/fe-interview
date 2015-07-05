'use strict';

var assert = require('assert');

describe('_.map', function() {

    var path = require('path');
    var map = require(path.resolve(process.cwd(), 'map', 'index'));

    it('basic test', function() {
        var test = [1, 2, 3];
        var actual = map(test, function(i) {
            return i + 1;
        });
        assert.deepEqual(actual, [2, 3, 4], '基本测试用例失败');
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
        var actual = map(test, function(i) {
            return i.population / this;
        }, 10);
        assert.deepEqual(actual, [2500000, 3000000], '上下文环境基本测试失败');
    });

});
