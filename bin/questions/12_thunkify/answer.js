'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var say = function(name, words, callback){
 *      setTimeout(function(){
 *          console.log('Hi ' + name + '! ' + words);
 *          callback({
 *              status: 'FINISHED'
 *          });
 *     });
 *  };
 *
 *  var thunkSay = thunkify(say);
 *
 *  thunkSay('ZhangSan', 'You are freak.')(function(data){
 *      console.log(data); // { status: 'FINISHED' }
 *  });
 *
 **/
var thunkify = function(func) {
    return function() {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        return function(cb) {
            try {
                func.apply(_this, args.concat([cb]));
            } catch (e) {
                cb(e);
            }
        };
    };
};

module.exports = thunkify;
