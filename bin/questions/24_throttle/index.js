
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
    //在这里实现
};

module.exports = throttle;
