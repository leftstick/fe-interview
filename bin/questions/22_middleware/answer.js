'use strict';

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
    this.pool = [];
};

Middleware.prototype.use = function(cb) {
    this.pool.push(cb.bind(this));
};

Middleware.prototype.start = function(cb) {
    const _this = this;

    const pullOut = function() {
        if (_this.pool.length === 0) {
            return cb.call(_this);
        }
        _this.pool.shift()(pullOut);
    };

    pullOut();
};

module.exports = Middleware;
