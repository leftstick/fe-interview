
const assert = require('assert');

describe('inherit', function() {

    const path = require('path');
    const Parent = require(path.resolve(process.cwd(), 'inherit', 'Parent'));
    const Son = require(path.resolve(process.cwd(), 'inherit', 'Son'));

    it('Parent has prototype method \'getName\'', function() {
        assert(typeof Parent.prototype.getName === 'function', 'Parent类上没定义原型方法getName');
    });

    it('parent.getName return string', function() {
        assert.equal(new Parent('nanfeng').getName(), 'nanfeng', 'Parent实例的getName方法返回值不正确');
    });

    it('Son is instance of Parent', function() {
        assert(new Son() instanceof Parent);
    });

    it('Son override getName', function() {
        assert.equal(new Son('nanfeng', 'child').getChildName(), 'child', 'Son类的getChildName方法返回值不正确');
        assert.equal(new Son('nanfeng', 'child').getName(), 'nanfeng', 'Son类的getName方法返回值不正确');
    });

    it('Son constructor test', function() {
        assert.notDeepEqual(new Son('nanfeng', 'child').constructor, new Parent('nanfeng').constructor, 'Son类的构造器不能和Parent类的相同');
    });
});