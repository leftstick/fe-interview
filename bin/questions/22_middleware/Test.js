
const assert = require('assert');

describe('test basic middleware', function() {

    const path = require('path');
    const Middleware = require(path.resolve(process.cwd(), 'middleware', 'index'));

    it('works with a single instance', function(done) {

        const middleware = new Middleware();

        middleware.use(function(next) {
            const ctx = this;
            setTimeout(function() {
                ctx.first = true;
                next();
            }, 10);
        });

        middleware.use(function(next) {
            const ctx = this;
            setTimeout(function() {
                ctx.second = true;
                next();
            }, 10);
        });

        middleware.start(function() {
            assert.equal(this.first, true);
            assert.equal(this.second, true);
            done();
        });
    });





    it('works with multiple instances', function(done) {

        const middleware1 = new Middleware();
        const middleware2 = new Middleware();

        middleware1.use(function(next) {
            const ctx = this;
            setTimeout(function() {
                ctx.first = true;
                next();
            }, 10);
        });

        middleware2.use(function(next) {
            const ctx = this;
            setTimeout(function() {
                ctx.second = true;
                next();
            }, 10);
        });

        middleware1.start(function() {
            assert.equal(this.first, true);
            middleware2.start(function() {
                assert.equal(this.second, true);
                done();
            });
        });

    });

});
