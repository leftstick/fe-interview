'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9, 6];
 *
 *  var found1 = findmost(arr1);
 *
 *  console.log(found1); // 6
 *
 *  var arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }, { name: 'ShangHai', size: 6340.5 }];
 *
 *  var found2 = findmost(arr2, function(item){
 *      return item.name;
 *  });
 *
 *  console.log(found2); // { name: 'ShangHai', size: 6340.5 }
 *
 **/
var findmost = function(array, identity) {
    var countObj = array.reduce(function(previous, key) {
        var k = identity ? identity(key) : key;
        previous[k] = previous[k] ? ++previous[k] : 1;
        return previous;
    }, {});

    var result = Object.keys(countObj).reduce(function(previous, key) {
        return countObj[previous] > countObj[key] ? previous : key;
    });

    if (!identity) {
        return result;
    }

    return array.find(function(item) {
        return identity(item) === result;
    });
};

module.exports = findmost;
