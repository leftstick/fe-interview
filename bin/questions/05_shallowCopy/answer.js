'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  shallowCopy([1, 2, 3])                      = [1, 2, 3]
 *  shallowCopy({ name: 'hello', value: 23 })   = { name: 'hello', value: 23 }
 *
 *  var value = [{ name: 'hello', value: 23 }];
 *  var copied = shallowCopy(value);
 *  copied[0].name = 'world';
 *  console.log(value[0].name) //world
 *
 *
 **/
var shallowCopy = function(value) {
    return Array.prototype.slice.apply(value);
};

module.exports = shallowCopy;
