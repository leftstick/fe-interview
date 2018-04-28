/**
 *
 *  该模块必须完成以下功能：
 *
 *  const currying = require('currying');
 *
 *  const add = function(a, b) {
 *     return a + b;
 *  };
 *
 *  const curried = currying(add);
 *  console.log(curried(1)(2)); // 3
 *
 **/
const currying = function(func) {
    const len = func.length;

    const getCurry = function(params) {
        return function() {
            const next = params.concat(Array.prototype.slice.call(arguments));
            if (len - next.length <= 0) {
                return func.apply(this, next);
            }
            return getCurry(next);
        };
    };

    return getCurry([]);
};

module.exports = currying;
