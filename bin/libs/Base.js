'use strict';

var fs = require('fs');
var path = require('path');
var TaskRunner = require('terminal-task-runner');
var Base = TaskRunner.Base;

var utils = require('./Utils');

var findQuestion = function(id) {
    var dirs = fs.readdirSync(path.resolve(__dirname, '..', 'questions'));
    return dirs.find(function(dir) {
        return dir.substring(3) === id;
    });
};

var BaseTask = Base.extend({
    run: function(cons) {
        var examDir = path.resolve(process.cwd(), this.id);

        if (!utils.folderExist(examDir)) {
            fs.mkdirSync(examDir);
        }

        this.prepare();

        var _this = this;

        this.prompt([
            {
                type: 'list',
                name: 'choice',
                message: '选择执行项',
                choices: [
                    {
                        name: '查看题目描述',
                        value: 'description'
                    },
                    {
                        name: '查看测试用例',
                        value: 'test'
                    },
                    {
                        name: '检验答题结果',
                        value: 'result'
                    }
                ]
            }
        ], function(answer) {

            if (answer.choice === 'description') {
                var question = findQuestion(_this.id);
                utils.printCode(path.resolve(__dirname, '..', 'questions', question, 'desc.txt'));
                cons();
                return;
            }

            if (answer.choice === 'test') {
                if (!utils.fileExist(path.resolve(process.cwd(), _this.id, 'Test.js'))) {
                    utils.copyFile(path.resolve(__dirname, '..', 'questions', findQuestion(_this.id), 'Test.js'), path.resolve(process.cwd(), _this.id, 'Test.js'));
                }
                TaskRunner.logger.info('测试用例已放置在"./' + _this.id + '/Test.js"，用个人偏好的IDE查看即可');
                cons();
                return;
            }

            var Mocha = require('mocha');
            var mocha = new Mocha({reporter: 'nyan'});
            mocha.addFile(path.resolve(__dirname, '..', 'questions', findQuestion(_this.id), 'Test.js'));

            mocha.run(function(failures) {
                cons(failures);
            });


            // _this.exec(cons);

        });
    }
});


module.exports = BaseTask;
