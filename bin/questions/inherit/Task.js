'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'inherit',
    name: '请尝试完成一个\'继承\'的实现',
    position: 2,
    prepare: function() {
        var path = require('path');
        var parent = path.resolve(process.cwd(), this.id, 'Parent.js');
        if (!this.fileExist(parent)) {
            this.copyFile(path.resolve(__dirname, 'Parent.js'), parent);
        }
        var son = path.resolve(process.cwd(), this.id, 'Son.js');
        if (!this.fileExist(son)) {
            this.copyFile(path.resolve(__dirname, 'Son.js'), son);
        }
    }
});


module.exports = Question;
