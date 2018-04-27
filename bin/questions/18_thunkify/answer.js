
/**
 *
 *  尝试完成如下功能：
 *
 *  const say = function(name, words, callback){
 *      setTimeout(function(){
 *          console.log('Hi ' + name + '! ' + words);
 *          callback({
 *              status: 'FINISHED'
 *          });
 *     });
 *  };
 *
 *  const thunkSay = thunkify(say);
 *
 *  thunkSay('ZhangSan', 'You are freak.')(function(data){
 *      console.log(data); // { status: 'FINISHED' }
 *  });
 *
 **/
const thunkify = function(func) {
    return function() {
        const _this = this;
        const args = Array.prototype.slice.call(arguments);
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
