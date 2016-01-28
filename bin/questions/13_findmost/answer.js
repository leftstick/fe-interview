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
        previous[k] = {
            count: previous[k] ? ++previous[k].count : 1,
            raw: key
        };
        return previous;
    }, {});

    var mostKey = Object.keys(countObj).reduce(function(previous, key) {
        return countObj[previous].count > countObj[key].count ? previous : key;
    });

    return countObj[mostKey].raw;
};

module.exports = findmost;
