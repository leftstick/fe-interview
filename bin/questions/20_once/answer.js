/**
 *
 *  尝试完成如下功能：
 *
 *  const getName = function(){
 *      console.log('Just say hi');
 *      return 'world';
 *  };
 *
 *  const onceCall = once(getName);
 *
 *  onceCall(); //Just say hi
 *  onceCall();
 *
 **/
const once = function(func) {
    let value,
        executed;
    return function() {
        const args = Array.prototype.slice.call(arguments);
        if (!executed) {
            executed = true;
            value = func.apply(this, args);
            return value;
        }
        return value;
    };
};

module.exports = once;
