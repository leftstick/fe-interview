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
var once = function(func) {
    var value,
        executed;
    return function() {
        var args = Array.prototype.slice.call(arguments);
        if (!executed) {
            executed = true;
            value = func.apply(this, args);
            return value;
        }
        return value;
    };
};

module.exports = once;
