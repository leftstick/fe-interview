'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  const sayHi = function() {
 *      console.log('hi');
 *  };
 *
 *  const throttled1 = throttle(sayHi, 100);
 *
 *  throttled1(); // 只有这里"hi"被真正输出了
 *  throttled1(); // 这次调用因为发生在第一次调用后100ms以内，所以将被忽略
 *
 *  const sayNo = function(){
 *      console.log('No!');
 *  };
 *
 *  const throttled2 = throttle(sayNo, 100);
 *
 *  throttled2(); // 这里"No!"被输出了
 *
 *  setTimeout(throttled2, 101); //这里，"No!"因为超过了每100ms内控制调用的限制
 *
 *
 **/
const throttle = function(func, wait) {
    let last,
        timer;
    return function() {
        const args = Array.prototype.slice.call(arguments);
        const _this = this,
            now = new Date().getTime();
        if (typeof last === 'undefined') {
            last = now;
            return func.apply(_this, args);
        }
        clearTimeout(timer);
        if (now - last > wait) {
            last = new Date().getTime();
            return func.apply(_this, args);
        }
        timer = setTimeout(function() {
            last = new Date().getTime();
            func.apply(_this, args);
        }, wait + last - now);
    };
};

module.exports = throttle;
