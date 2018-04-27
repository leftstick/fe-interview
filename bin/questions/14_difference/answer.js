/**
 *
 *  尝试完成如下功能：
 *
 *  const arr1 = [3, 6, 9];
 *  const arr2 = [1, 6, 8];
 *
 *  const diff = difference(arr1, arr2);
 *
 *  console.log(diff); // [3, 9]
 *
 **/
const isNaN = Number.isNaN;
const difference = function(arr1, arr2) {
    return arr1.reduce(function(previous, i) {
        const found = arr2.findIndex(function(j) {
            return j === i || (isNaN(i) && isNaN(j));
        });
        return (found < 0 && previous.push(i), previous);
    }, []);
};

module.exports = difference;
