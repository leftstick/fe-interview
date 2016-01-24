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
    //在这里实现
};

module.exports = thunkify;
