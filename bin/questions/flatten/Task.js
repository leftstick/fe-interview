'use strict';

var Base = require('../../libs/Base');

var Task = Base.extend({
    id: 'flatten',
    name: '请尝试完成一个类似\'_.flatten\'的模块',
    position: 1,
    exec: function(cons) {

        cons();

    }
});


module.exports = Task;
