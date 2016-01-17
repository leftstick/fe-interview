'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'duplicate',
    name: '请尝试完成一个\'duplicate(重复)\'的模块',
    position: 4,
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
