/**
 *
 *  尝试完成如下功能：
 *
 *  const arr1 = [3, 6, 9];
 *
 *  const found1 = find(arr1, function(i){
 *      return i > 5;
 *  });
 *
 *  console.log(found1); // 6
 *
 *  const arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }];
 *
 *  const found2 = find(arr2, function(i){
 *      return i.name === 'ShangHai';
 *  });
 *
 *  console.log(found2); // { name: 'ShangHai', size: 6340.5 }
 *
 **/
const find = function(array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i)) {
            return array[i];
        }
    }
};

module.exports = find;
