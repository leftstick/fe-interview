'use strict';

var promiseify = require('just-promiseify');
var inquirer = require('inquirer');
var fs = require('fs');

var cli = function(options) {
    return promiseify(fs.readdir)(options.taskDir)
        .then(function(files) {
            return files.map(function(file) {
                var cls = require(options.taskDir + '/' + file + '/Task');
                return new cls({
                    path: options.taskDir + '/' + file + '/Task',
                    preferenceName: options.preferenceName
                });
            });
        })
        .then(function(tasks) {
            return promiseify(inquirer.prompt)([
                {
                    type: 'list',
                    name: 'task',
                    message: '使用光标上/下键选择测试题目',
                    default: 0,
                    choices: tasks.sort((t1, t2) => t1.position > t2.position).map(function(t) {
                        return {name: t.name, value: t};
                    })
                }
            ]);
        })
        .then(function(answers) {
            answers.task.run(() => {
            });
        });
};

module.exports = cli;
