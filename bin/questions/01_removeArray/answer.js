'use strict';

/**
 *
 *  该模块必须完成以下功能：
 *
 *  var removeArray = require('removeArray');
 *
 *  var arr = [1, 2, 3, 4];
 *  removeArray(arr, 0);
 *  console.log(arr); // [2, 3, 4]
 *
 *  removeArray(arr, 2);
 *  console.log(arr); // [2, 3]
 *
 *  removeArray(arr, 3);
 *  console.log(arr); // [2, 3]
 *
 **/
var removeArray = function(arr, index) {
    arr.splice(index, 1);
};

module.exports = removeArray;
