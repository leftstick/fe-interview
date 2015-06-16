'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'flatten',
    name: '请尝试完成一个类似\'_.flatten\'的模块',
    position: 1,
    prepare: function() {
        var fs = require('fs');
        var path = require('path');
        var index = path.resolve(process.cwd(), this.id, 'index.js');
        if (fs.existsSync(index) && fs.statSync(index).isFile()) {
            return;
        }
        this.copyFile(path.resolve(__dirname, 'index.js'), index);
    }
});


module.exports = Question;
