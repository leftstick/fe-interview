
const Base = require('../../libs/Base');
const utils = require('../../libs/Utils');

const Question = Base.extend({
    id: 'inherit',
    name: '请尝试完成一个\'继承\'的实现',
    prepare: function() {
        const path = require('path');
        const parent = path.resolve(process.cwd(), this.id, 'Parent.js');
        if (!utils.fileExist(parent)) {
            utils.copyFile(path.resolve(__dirname, 'Parent.js'), parent);
        }
        const son = path.resolve(process.cwd(), this.id, 'Son.js');
        if (!utils.fileExist(son)) {
            utils.copyFile(path.resolve(__dirname, 'Son.js'), son);
        }
    }
});


module.exports = Question;
