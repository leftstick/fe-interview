'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = ['a', 'b'];
 *
 *  flatmap(arr1, function(item){
 *      return [item, item];
 *  }); // ['a', 'a', 'b', 'b']
 *
 *
 **/
var flatmap = function(array, iteratee) {
    return Array.prototype.concat.apply([], array.map(iteratee));
};

module.exports = flatmap;
