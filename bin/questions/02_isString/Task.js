const Base = require('../../libs/Base');
const utils = require('../../libs/Utils');

const Question = Base.extend({
    id: 'isString',
    name: '请尝试完成可以判断传入变量是否为\'string\'的模块',
    prepare: function() {
        const path = require('path');
        const index = path.resolve(process.cwd(), this.id, 'index.js');
        if (utils.fileExist(index)) {
            return;
        }
        utils.copyFile(path.resolve(__dirname, 'index.js'), index);
    }
});


module.exports = Question;
