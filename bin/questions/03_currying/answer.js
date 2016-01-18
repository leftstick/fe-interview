'use strict';

/**
 *
 *  该模块必须完成以下功能：
 *
 *  var currying = require('currying');
 *
 *  var add = function(a, b) {
 *     return a + b;
 *  };
 *
 *  var curried = curry(add);
 *  console.log(curried(1)(2)); // 3
 *
 **/
var currying = function(func) {
    var len = func.length;

    var getCurry = function(params) {
        return function() {
            var _this = this;
            var next = params.concat(Array.prototype.slice.call(arguments));
            if (len - next.length === 0) {
                return func.apply(_this, next);
            }
            return getCurry(next);
        };
    };

    return getCurry([]);
};

module.exports = currying;
