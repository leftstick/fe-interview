/**
 *
 *  尝试完成如下功能：
 *
 *  const arr1 = ['a', 'b'];
 *
 *  flatmap(arr1, function(item){
 *      return [item, item];
 *  }); // ['a', 'a', 'b', 'b']
 *
 *
 **/
const flatmap = function(array, iteratee) {
    return Array.prototype.concat.apply([], array.map(iteratee));
};

module.exports = flatmap;
