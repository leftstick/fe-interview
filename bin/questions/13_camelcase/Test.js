'use strict';

var assert = require('assert');

describe('test basic camelcase', function() {

    var path = require('path');
    var camelcase = require(path.resolve(process.cwd(), 'camelcase', 'index'));

    it('basic test', function() {
        assert.equal('helloworld', camelcase('helloworld'), '基本测试失败');
    });

    it('with one whitespace as separater', function() {
        assert.equal('helloWorld', camelcase('hello world'), '单空格测试失败');
    });

    it('with one whitespace as separater, multiple words', function() {
        assert.equal('howAreYou', camelcase('how are you'), '单空格多单词测试失败');
    });

    it('with multiple whitespaces as separater', function() {
        assert.equal('howAreYou', camelcase('how   are   you'), '多空格测试失败');
    });

    it('with one dash as separater', function() {
        assert.equal('whatTheFuck', camelcase('what-the-fuck'), '横杠做分隔符测试失败');
    });

    it('mix with dash and whitespace as separater', function() {
        assert.equal('iWillMissThisExam', camelcase('i  will-miss this----exam'), '混合测试失败');
    });

});
