/**
 *
 *  尝试完成如下功能：
 *
 *  times(1, String); // ['0']
 *
 *  times(3, Boolean); // [false, true, true]
 *
 *  times(4, function(){ return 'Fuck'; }); // ['Fuck', 'Fuck', 'Fuck', 'Fuck']
 *
 *
 **/
const times = function(n, func) {
    return Array
        .apply([], new Array(n))
        .map(function(item, index) {
            return func(index);
        });
};

module.exports = times;
