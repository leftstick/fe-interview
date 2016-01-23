'use strict';

var assert = require('assert');

describe('flatten', function() {

    var path = require('path');
    var _ = require('lodash');
    var flatten = require(path.resolve(process.cwd(), 'flatten', 'index'));

    it('basic test', function() {
        var arr = [
            1,
            [
                2,
                [
                    3,
                    4
                ],
                5
            ],
            6
        ];
        assert.deepEqual(flatten(arr), _.flattenDeep(arr));
    });

    it('object array', function() {
        var arr = [
            1,
            [
                {
                    name: 'BeiJing'
                },
                [
                    3,
                    'ZhongGuo'
                ],
                {
                    age: 90,
                    isMale: false
                }
            ],
            6
        ];
        assert.deepEqual(flatten(arr), _.flattenDeep(arr));
    });
});
