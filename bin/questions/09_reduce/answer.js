'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  reduce([1, 2], function(previous, i){ return previous + i;} )                                         = [2, 4]
 *  reduce([{name: 'nan', age: 2}, {name: 'fang', age: 3}], function(previous, i){ return previous + i.name;  }, 'Hello ') = Hello nanfeng
 *
 **/
var reduce = function(arr, func, initialValue) {
    var base = typeof initialValue === 'undefined' ? arr[0] : initialValue;
    var stepForward = typeof initialValue === 'undefined' ? 1 : 0;
    var startPoint = stepForward;
    arr
        .slice(startPoint)
        .forEach(function(val, index) {
            base = func(base, val, index + stepForward, arr);
        });
    return base;
};

module.exports = reduce;
