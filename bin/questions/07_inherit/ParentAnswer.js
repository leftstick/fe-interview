
/**
 *  1. 给当前Parent类增加一个原型方法: getName
 *  2. 在getName方法中，返回Parent自己的名字
 *
 **/
const Parent = function(name) {
    this.name = name;
};

Parent.prototype.getName = function() {
    return this.name;
};

module.exports = Parent;
