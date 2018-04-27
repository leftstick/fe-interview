/**
 *
 *  尝试完成如下功能：
 *
 *  const what = 'The fuck!';
 *
 *  value(what) === 'The fuck!'
 *
 *  const hello = function() {
 *      return 'world';
 *  };
 *
 * value(hello) === 'world'
 *
 *
 **/
const value = function(anything) {
    if (Object.prototype.toString.call(anything) !== '[object Function]') {
        return anything;
    }
    return value(anything());
};

module.exports = value;
