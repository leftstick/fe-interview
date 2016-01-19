'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9];
 *
 *  var found1 = find(arr1, function(i){
 *      return i > 5;
 *  });
 *
 *  console.log(found1); // 6
 *
 *  var arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }];
 *
 *  var found2 = find(arr2, function(i){
 *      return i.name === 'ShangHai';
 *  });
 *
 *  console.log(found2); // { name: 'ShangHai', size: 6340.5 }
 *
 **/
var find = function(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i)) {
            return array[i];
        }
    }
};

module.exports = find;
