/**
 *
 *  尝试完成如下功能：
 *
 *  const mw = new Middleware();
 *
 *  mw.use(function(next) {
 *      const self = this;
 *      setTimeout(function() {
 *          self.hook1 = true;
 *          next();
 *      }, 10);
 *  });
 *
 *  mw.use(function(next) {
 *      const self = this;
 *      setTimeout(function() {
 *          self.hook2 = true;
 *          next();
 *      }, 10);
 *  });
 *
 *  const startTime = new Date();
 *
 *  mw.start(function() {
 *      console.log(this.hook1); // true
 *      console.log(this.hook2); // true
 *      console.log(new Date() - startTime); // around 20
 *  });
 *
 **/
const Middleware = function() {
    //在这里实现
};

module.exports = Middleware;
