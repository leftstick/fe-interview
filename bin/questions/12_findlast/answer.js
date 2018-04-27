
/**
 *
 *  尝试完成如下功能：
 *
 *  const arr1 = [3, 6, 9];
 *
 *  const found1 = findlast(arr1, function(i){
 *      return i > 3;
 *  });
 *
 *  console.log(found1); // 9
 *
 *  const arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }];
 *
 *  const found2 = findlast(arr2, function(i){
 *      return i.name.indexOf('i');
 *  });
 *
 *  console.log(found2); // { name: 'BeiJing', size: 16410.54 }
 *
 **/
const findlast = function(array, func) {
    for (let i = array.length - 1; i > -1; i--) {
        if (func(array[i], i)) {
            return array[i];
        }
    }
};

module.exports = findlast;
