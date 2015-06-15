'use strict';

var Base = require('terminal-task-runner').Base;

var BaseTask = Base.extend({
    run: function(cons) {

        var fs = require('fs');
        var path = require('path');
        var examDir = path.resolve(process.cwd(), this.id);

        if (!fs.existsSync(examDir) || !fs.statSync(examDir).isDirectory()) {
            fs.mkdirSync(examDir);
        }

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

            _this.exec(cons);

        });


    }
});


module.exports = BaseTask;
