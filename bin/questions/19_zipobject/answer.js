
/**
 *
 *  尝试完成如下功能：
 *
 *  zipobject(['fred', 'barney'], [30, 40]); // { 'fred': 30, 'barney': 40 }
 *
 *  zipobject(['Shanghai', 'Beijing'], [25000000, 30000000, 999]);
 *  // { 'Shanghai': 25000000, 'Beijing':  30000000}
 *
 *
 **/
const zipobject = function(arr1, arr2) {
    return arr1.reduce(function(previous, key, index) {
        return (previous[key] = arr2[index]) + '' && previous;
    }, {});
};

module.exports = zipobject;
