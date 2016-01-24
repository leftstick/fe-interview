'use strict';

var Base = require('../../libs/Base');

var utils = require('../../libs/Utils');

var Question = Base.extend({
    id: 'findmost',
    name: '请尝试完成一个查找出现频率最高元素的模块',
    prepare: function() {
        var path = require('path');
        var index = path.resolve(process.cwd(), this.id, 'index.js');
        if (utils.fileExist(index)) {
            return;
        }
        utils.copyFile(path.resolve(__dirname, 'index.js'), index);
    }
});


module.exports = Question;
