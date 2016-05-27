'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var sayHi = function() {
 *      console.log('hi');
 *  };
 *
 *  var throttled1 = throttle(sayHi, 100);
 *
 *  throttled1(); // 只有这里"hi"被真正输出了
 *  throttled1(); // 这次调用因为发生在第一次调用后100ms以内，所以将被忽略
 *
 *  var sayNo = function(){
 *      console.log('No!');
 *  };
 *
 *  var throttled2 = throttle(sayNo, 100);
 *
 *  throttled2(); // 这里"No!"被输出了
 *
 *  setTimeout(throttled2, 101); //这里，"No!"因为超过了每100ms内控制调用的限制
 *
 *
 **/
var throttle = function(func, wait) {
    var createThrottle = function(f, t) {
        var last,
            timer;
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var _this = this,
                now = new Date().getTime();
            if (typeof last === 'undefined') {
                last = now;
                return func.apply(_this, args);
            }
            if (now - last > wait) {
                func.apply(_this, args);
                last = new Date().getTime();
                clearTimeout(timer);
            } else {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    func.apply(_this, args);
                    last = new Date().getTime();
                }, wait - now + last);
            }
        };
    };

    return createThrottle(func, wait);
};

module.exports = throttle;
