const assert = require('assert');

describe('test basic thunkify', function() {

    const path = require('path');
    const thunkify = require(path.resolve(process.cwd(), 'thunkify', 'index'));

    it('basic test1', function(done) {
        let read = function(file, fn) {
            fn(null, 'file: ' + file);
        };

        read = thunkify(read);

        read('hello.txt')(function(err, res) {
            assert(!err);
            assert('file: hello.txt' === res);
            done();
        });
    });

    it('should work when async', function(done) {
        let read = function(file, fn) {
            setTimeout(function() {
                fn(null, 'file: ' + file);
            }, 5);
        };

        read = thunkify(read);

        read('world.txt')(function(err, res) {
            assert(!err);
            assert('file: world.txt' === res);
            done();
        });
    });

    it('should maintain the receiver', function(done) {
        const load = function(fn) {
            fn(null, this.name);
        };

        const user = {name: 'nanfeng', load: thunkify(load)};

        user.load()(function(err, name) {
            if (err) {
                return done(err);
            }
            assert('nanfeng' === name);
            done();
        });
    });

    it('should catch errors', function(done) {
        let load = function(fn) {
            throw new Error('wow!!!');
        };

        load = thunkify(load);

        load()(function(err) {
            assert(err);
            assert('wow!!!' == err.message);
            done();
        });
    });

    it('should pass all results', function(done) {
        let read = function(file, fn) {
            setTimeout(function() {
                fn(null, file.substring(0, 2), file.substring(6));
            }, 5);
        };

        read = thunkify(read);

        read('hello.txt')(function(err, a, b) {
            assert(!err);
            assert('he' === a);
            assert('txt' === b);
            done();
        });
    });


});
