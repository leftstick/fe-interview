/**
 *
 *  尝试完成如下功能：
 *
 * const app = new Di();
 *
 * app.register('duck', {
 *     fly: function(){
 *         console.log('fuck flying');
 *     }
 * });
 *
 * app.run(['duck', function(duck){
 *     duck.fly();//fuck flying
 * }]);
 *
 *
 **/
const Di = function() {
    this.instanceStore = {};
};

Di.prototype.register = function(name, inst) {
    this.instanceStore[name] = inst;
};

Di.prototype.run = function(arr) {
    const _this = this,
        lastIndex = arr.length - 1;

    arr[lastIndex].apply(null,
        arr.slice(0, lastIndex)
            .map(function(name) {
                const Inst = _this.instanceStore[name];
                if (!Inst) {
                    throw new Error('You are expecting a non-exist instance');
                }
                return typeof Inst === 'function' ? new Inst() : Inst;
            }));
};

module.exports = Di;
