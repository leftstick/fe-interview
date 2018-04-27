
const TaskRunner = require('terminal-task-runner');
const utils = require('../../libs/Utils');
const path = require('path');

const CopyAnwser = function(id) {
    if (!utils.fileExist(path.resolve(process.cwd(), id, 'ParentAnswer.js'))) {
        utils.copyFile(path.resolve(__dirname, 'ParentAnswer.js'), path.resolve(process.cwd(), id, 'ParentAnswer.js'));
    }
    if (!utils.fileExist(path.resolve(process.cwd(), id, 'SonAnswer.js'))) {
        utils.copyFile(path.resolve(__dirname, 'SonAnswer.js'), path.resolve(process.cwd(), id, 'SonAnswer.js'));
    }
    TaskRunner.logger.info('答案已放置在"./' + id + '/"目录，用个人偏好的IDE查看即可');
};

module.exports = CopyAnwser;
