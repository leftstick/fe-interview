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
    var result = initialValue;
    if (result) {
        arr.forEach(function(i, index) {
            result = func(result, i);
        });
    } else {
        result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
    }
    return result;
};

module.exports = reduce;
