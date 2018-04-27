
const Base = require('../../libs/Base');

const utils = require('../../libs/Utils');

const Question = Base.extend({
    id: 'findmost',
    name: '请尝试完成一个查找出现频率最高元素的模块',
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
