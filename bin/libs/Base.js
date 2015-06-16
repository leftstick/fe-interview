'use strict';

var TaskRunner = require('terminal-task-runner');
var Base = TaskRunner.Base;

var BaseTask = Base.extend({
    run: function(cons) {

        var fs = require('fs');
        var path = require('path');
        var examDir = path.resolve(process.cwd(), this.id);

        if (!fs.existsSync(examDir) || !fs.statSync(examDir).isDirectory()) {
            fs.mkdirSync(examDir);
        }

        this.prepare();

        var _this = this;

        this.prompt([{
            type: 'list',
            name: 'choice',
            message: '选择执行项',
            choices: [{
                name: '查看题目描述',
                value: 'description'
            }, {
                name: '检验答题结果',
                value: 'result'
            }]
        }], function(answer) {

            var utils = require('./Utils');

            if (answer.choice === 'description') {
                utils.printFile(path.resolve(__dirname, '..', 'questions', _this.id, 'desc.txt'));
                return;
            }

            var Mocha = require('mocha');
            var mocha = new Mocha({
                reporter: 'nyan'
            });
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
    }
});


module.exports = BaseTask;
