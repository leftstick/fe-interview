'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9];
 *  var arr2 = [1, 6, 8];
 *
 *  var diff = difference(arr1, arr2);
 *
 *  console.log(diff); // [3, 9]
 *
 **/
var isNaN = Number.isNaN;
var difference = function(arr1, arr2) {
    return arr1.reduce(function(previous, i) {
        var found = arr2.findIndex(function(j) {
            return j === i || (isNaN(i) && isNaN(j));
        });
        if (found < 0) {
            previous.push(i);
        }
        return previous;
    }, []);
};

module.exports = difference;
