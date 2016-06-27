'use strict';

/**
 *
 *  输入： array，例如: [1, [2, [3 ,4], 5], 6]
 *
 *  输出：一个扁平化后的array，例如：[1, 2, 3 ,4, 5, 6]
 *
 **/
var flatten = function(array) {
    return array.reduce(function(previous, i) {
        if (Object.prototype.toString.call(i) !== '[object Array]') {
            return (previous.push(i), previous);
        }
        return (Array.prototype.push.apply(previous, flatten(i)), previous);
    }, []);
};

module.exports = flatten;
