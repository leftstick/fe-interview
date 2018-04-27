const assert = require('assert');

describe('duplicate', function() {

    const path = require('path');
    const duplicate = require(path.resolve(process.cwd(), 'duplicate', 'index'));

    it('basic test', function() {
        const arr = [
            8,
            2,
            16,
            90,
            55,
            9911
        ];
        assert.deepEqual(duplicate(arr), arr.concat(arr), '基本测试失败');
    });
});
