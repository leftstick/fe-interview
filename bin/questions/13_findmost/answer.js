
/**
 *
 *  尝试完成如下功能：
 *
 *  const arr1 = [3, 6, 9, 6];
 *
 *  const found1 = findmost(arr1);
 *
 *  console.log(found1); // 6
 *
 *  const arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }, { name: 'ShangHai', size: 6340.5 }];
 *
 *  const found2 = findmost(arr2, function(item){
 *      return item.name;
 *  });
 *
 *  console.log(found2); // { name: 'ShangHai', size: 6340.5 }
 *
 **/
const findmost = function(array, identity) {
    const occurrence = {};
    let most;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const id = identity ? identity(item) : item;
        if (!occurrence[id]) {
            occurrence[id] = {count: 1, raw: item};
        } else {
            occurrence[id].count++;
        }
        if (!most || (most !== id && occurrence[id].count > occurrence[most].count)) {
            most = id;
        }
    }
    return occurrence[most].raw;
};

module.exports = findmost;
