'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 * var app = new Di();
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
var Di = function() {};

Di.prototype.register = function(name, inst) {};

Di.prototype.run = function(arr) {};

module.exports = Di;
