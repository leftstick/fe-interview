'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var array = [1, 2, 3];
 *
 *  filter(array, function(item){
 *      return item % 2 === 0;
 *  }); // [2]
 *
 *
 **/
var filter = function(arr, iteratee) {
    return arr.reduce(function(previous, item) {
        if (iteratee(item)) {
            previous.push(item);
        }
        return previous;
    }, []);
};

module.exports = filter;
