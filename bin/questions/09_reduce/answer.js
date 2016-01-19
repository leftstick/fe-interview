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
    var result = initialValue || arr[0];
    arr
        .slice(typeof initialValue === 'undefined' ? 1 : 0)
        .forEach(function(i) {
            result = func(result, i);
        });
    return result;
};

module.exports = reduce;
