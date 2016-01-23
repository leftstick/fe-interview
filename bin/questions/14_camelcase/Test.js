'use strict';

var assert = require('assert');

describe('test basic camelcase', function() {

    var path = require('path');
    var camelcase = require(path.resolve(process.cwd(), 'camelcase', 'index'));

    it('basic test', function() {
        assert.equal(camelcase('helloworld'), 'helloworld', '基本测试失败');
    });

    it('with one whitespace as separater', function() {
        assert.equal(camelcase('hello world'), 'helloWorld', '单空格测试失败');
    });

    it('with one whitespace as separater and all capitalized', function() {
        assert.equal(camelcase('HELLO WORLD'), 'helloWorld', '单空格全大写测试失败');
    });

    it('with one whitespace as separater, multiple words', function() {
        assert.equal(camelcase('how are you'), 'howAreYou', '单空格多单词测试失败');
    });

    it('with multiple whitespaces as separater', function() {
        assert.equal(camelcase('how   are   you'), 'howAreYou', '多空格测试失败');
    });

    it('with one dash as separater', function() {
        assert.equal(camelcase('what-the-fuck'), 'whatTheFuck', '横杠做分隔符测试失败');
    });

    it('mix with dash and whitespace as separater', function() {
        assert.equal(camelcase('i  will-miss this----exam'), 'iWillMissThisExam', '混合测试失败');
    });

});
