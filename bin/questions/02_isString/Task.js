'use strict';

var Base = require('../../libs/Base');
var utils = require('../../libs/Utils');

var Question = Base.extend({
    id: 'isString',
    name: '请尝试完成可以判断传入变量是否为\'string\'的模块',
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
