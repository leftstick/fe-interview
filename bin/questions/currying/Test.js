'use strict';

var assert = require('assert');

describe('duplicate', function() {

    var path = require('path');
    var currying = require(path.resolve(process.cwd(), 'currying', 'index'));

    it('basic test', function() {
        var curried = currying(function(a, b) {
            return a + b;
        });
        assert.equal(curried(10)(29), 39);
    });
});
