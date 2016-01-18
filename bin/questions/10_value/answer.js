'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var what = 'The fuck!';
 *
 *  value(what) === 'The fuck!'
 *
 *  var hello = function() {
 *      return 'world';
 *  };
 *
 * value(hello) === 'world'
 *
 *
 **/
var value = function(anything) {
    if (Object.prototype.toString.call(anything) !== '[object Function]') {
        return anything;
    }
    return value(anything());
};

module.exports = value;
