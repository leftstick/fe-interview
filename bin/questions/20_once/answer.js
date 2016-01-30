'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var getName = function(){
 *      console.log('Just say hi');
 *      return 'world';
 *  };
 *
 *  var onceCall = once(getName);
 *
 *  onceCall(); //Just say hi
 *  onceCall();
 *
 **/
var getOnceCall = function(fn) {
    var value, executed;
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return !executed ? (executed = true, value = fn.apply(this, args)) : value;
    };
};

var once = function(func) {
    return getOnceCall(func);
};

module.exports = once;
