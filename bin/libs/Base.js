'use strict';

var TaskRunner = require('terminal-task-runner');
var Base = TaskRunner.Base;

var BaseTask = Base.extend({
    run: function(cons) {

        var fs = require('fs');
        var path = require('path');
        var examDir = path.resolve(process.cwd(), this.id);

        if (!this.folderExist(examDir)) {
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

            var utils = require('./Utils');

            if (answer.choice === 'description') {
                utils.printFile(path.resolve(__dirname, '..', 'questions', _this.id, 'desc.txt'));
                cons();
                return;
            }

            if (answer.choice === 'test') {
                if (!_this.fileExist(path.resolve(process.cwd(), _this.id, 'Test.js'))) {
                    _this.copyFile(path.resolve(__dirname, '..', 'questions', _this.id, 'Test.js'), path.resolve(process.cwd(), _this.id, 'Test.js'));
                }
                TaskRunner.logger.info('测试用例已放置在"./' + _this.id + '/Test.js"，请用个人偏好的IDE查看即可');
                cons();
                return;
            }

            var Mocha = require('mocha');
            var mocha = new Mocha({reporter: 'nyan'});
            mocha.addFile(path.resolve(__dirname, '..', 'questions', _this.id, 'Test.js'));

            mocha.run(function(failures) {
                cons(failures);
            });


            // _this.exec(cons);

        });
    },
    copyFile: function(src, dest) {
        var fs = require('fs');
        fs.createReadStream(src)
            .pipe(fs.createWriteStream(dest));
    },
    fileExist: function(path) {
        var fs = require('fs');
        return fs.existsSync(path) && fs.statSync(path).isFile();
    },
    folderExist: function(path) {
        var fs = require('fs');
        return fs.existsSync(path) && fs.statSync(path).isDirectory();
    }
});


module.exports = BaseTask;
