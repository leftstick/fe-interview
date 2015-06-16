'use strict';

var assert = require('assert');

describe('inherit', function() {

    var path = require('path');
    var Parent = require(path.resolve(process.cwd(), 'inherit', 'Parent'));
    var Son = require(path.resolve(process.cwd(), 'inherit', 'Son'));

    it('Parent has prototype method \'getName\'', function() {
        assert(typeof Parent.prototype['getName'] === 'function');
    });

    it('parent.getName return string', function() {
        assert.equal(new Parent('nanfeng').getName(), 'nanfeng');
    });

    it('Son is instance of Parent', function() {
        assert(new Son() instanceof Parent);
    });

    it('Son override getName', function() {
        assert.equal(new Son('nanfeng', 'child').getChildName(), 'child');
        assert.equal(new Son('nanfeng', 'child').getName(), 'nanfeng');
    });

    it('Son constructor test', function() {
        assert.notDeepEqual(new Son('nanfeng', 'child').constructor, new Parent('nanfeng').constructor);
    });
});
