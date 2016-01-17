'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'value',
    name: '请尝试完成一个获取原始数据值的模块',
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
