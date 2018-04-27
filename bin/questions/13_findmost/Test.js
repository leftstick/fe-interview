const assert = require('assert');

describe('test basic findmost', function() {

    const path = require('path');
    const findmost = require(path.resolve(process.cwd(), 'findmost', 'index'));

    it('basic test', function() {
        const arr1 = [
            'nan',
            'feng',
            'hao',
            'li',
            'feng',
            'feng',
            'li'
        ];

        const res = findmost(arr1);
        assert.equal(res, 'feng', '基本测试失败');
    });

    it('with object', function() {
        const arr1 = [{name: 'SX'}, {name: 'SH'}, {name: 'SX'}];

        const res = findmost(arr1, function(item) {
            return item.name;
        });
        assert.deepEqual(res, {name: 'SX'}, '对象测试失败');
    });

});
