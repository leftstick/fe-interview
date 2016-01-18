'use strict';

/**
 *
 *  输入： array，例如: [1, [2, [3 ,4], 5], 6]
 *
 *  输出：一个扁平化后的array，例如：[1, 2, 3 ,4, 5, 6]
 *
 **/
var flatten = function(array) {
    var arr = [];

    array.forEach(function(i) {
        if (Object.prototype.toString.call(i) === '[object Array]') {
            Array.prototype.push.apply(arr, flatten(i));
            return;
        }
        arr.push(i);
    });

    return arr;
};

module.exports = flatten;
