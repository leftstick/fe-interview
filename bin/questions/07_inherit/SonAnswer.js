
/**
 *
 *  1. 让Son继承自Parent，并保证new Son() instanceof Parent === true
 *  2. 给Son类增加一个构造参数childName
 *  3. 并在Son中增加原型方法getChildName，使其返回自己的名字childName
 *
 **/
const Parent = require('./ParentAnswer');

const Son = function(parentName, name) {
    Parent.call(this, parentName);
    this.childName = name;
};

Son.prototype = new Parent();

Son.prototype.constructor = Son;

Son.prototype.getChildName = function() {
    return this.childName;
};

module.exports = Son;
