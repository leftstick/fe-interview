
const assert = require('assert');

describe('test basic findlast', function() {

    const path = require('path');
    const findlast = require(path.resolve(process.cwd(), 'findlast', 'index'));

    it('basic test', function() {
        const arr1 = [
            'nan',
            'feng',
            'hao',
            'li'
        ];

        const res = findlast(arr1, function(i) {
            return i === 'hao';
        });
        assert.equal(res, 'hao', '基本测试失败');
    });

    it('only first matched element should returned', function() {
        const arr1 = [
            1,
            2,
            4,
            5,
            6
        ];

        const res = findlast(arr1, function(i) {
            return i < 5;
        });
        assert.equal(res, 4, '必须返回最后一个匹配元素');
    });

    it('object array should also work', function() {
        const arr1 = [
            {
                name: 'HanMeimei'
            },
            {
                name: 'LiLei'
            },
            {
                name: 'ErDan'
            }
        ];

        const res = findlast(arr1, function(i) {
            return i.name.indexOf('e') > -1;
        });
        assert.deepEqual(res, {name: 'LiLei'}, '对象元素测试失败');
    });

});
