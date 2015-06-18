'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'currying',
    name: '请尝试完成一个简单的使柯里化(currying)模块',
    position: 2,
    prepare: function() {
        var path = require('path');
        var index = path.resolve(process.cwd(), this.id, 'index.js');
        if (this.fileExist(index)) {
            return;
        }
        this.copyFile(path.resolve(__dirname, 'index.js'), index);
    }
});


module.exports = Question;
