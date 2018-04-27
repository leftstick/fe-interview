
const assert = require('assert');

describe('test di functionality', function() {

    const path = require('path');
    const Di = require(path.resolve(process.cwd(), 'di', 'index'));

    it('injecting literal object', function(done) {
        const app = new Di();

        app.register('duck', {
            fly: function() {
                return 'fuck flying';
            }
        });

        app.run(['duck', function(duck) {
            assert.equal(duck.fly(), 'fuck flying', '字面量注入测试失败');
            done();
        }]);
    });

    it('injecting class', function(done) {
        const app = new Di();

        app.register('woman', function() {
            this.cry = function() {
                return 'crying wawawa!';
            };
        });

        app.run(['woman', function(woman) {
            assert.equal(woman.cry(), 'crying wawawa!', '类注入测试失败');
            done();
        }]);
    });

    it('injecting multiple instances', function(done) {
        const app = new Di();

        app.register('people', function() {
            this.yell = function() {
                return 'don\'t go';
            };
        });

        app.register('puppy', function() {
            this.bark = function() {
                return 'wow';
            };
        });

        app.run(['puppy', 'people', function(puppy, people) {
            assert.equal(puppy.bark(), 'wow', '多实例puppy注入测试失败');
            assert.equal(people.yell(), 'don\'t go', '多实例people注入测试失败');
            done();
        }]);
    });

    it('injecting nothing', function() {
        const app = new Di();

        app.register('puppy', function() {
            this.bark = function() {
                return 'wow';
            };
        });

        assert.throws(function() {
            app.run(['man', function(man) {}]);
        }, Error, '不存在实例测试失败');
    });

});
