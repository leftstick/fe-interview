/**
 *
 *  尝试完成如下功能：
 *
 *  isString('hello')              = true
 *  isString(123)                  = false
 *  isString(undefined)            = false
 *  isString(null)                 = false
 *  isString(new String('hello'))  = true
 *
 *
 **/
const isString = function(value) {
    return Object.prototype.toString.call(value) === '[object String]';
};

module.exports = isString;
