
const assert = require('assert');

describe('flatten', function() {

    const path = require('path');
    const _ = require('lodash');
    const flatten = require(path.resolve(process.cwd(), 'flatten', 'index'));

    it('basic test', function() {
        const arr = [
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
        const arr = [
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
