'use strict';

var assert = require('assert');

describe('test urlparser functionality', function() {

    var path = require('path');
    var urlparser = require(path.resolve(process.cwd(), 'urlparser', 'index'));

    it('basic test1', function() {
        assert.deepEqual(urlparser('https://web.com'), {
            protocol: 'https',
            host: 'web.com'
        }, '简单URL验证失败');
    });

    it('basic test2', function() {
        assert.deepEqual(urlparser('https://web.com/'), {
            protocol: 'https',
            path: '/',
            host: 'web.com'
        }, '简单URL验证失败');
    });

    it('url without path', function() {
        assert.deepEqual(urlparser('http://web.com?name=leftstick'), {
            protocol: 'http',
            host: 'web.com',
            query: {
                name: 'leftstick'
            }
        }, '完整URL验证失败');
    });

    it('fullurl test', function() {
        assert.deepEqual(urlparser('http://web.com/nanfeng?name=leftstick&date=20160118'), {
            protocol: 'http',
            host: 'web.com',
            path: '/nanfeng',
            query: {
                name: 'leftstick',
                date: '20160118'
            }
        }, '完整URL验证失败');
    });

});
