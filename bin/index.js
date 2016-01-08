#!/usr/bin/env node

'use strict';

var path = require('path');
var TaskRunner = require('terminal-task-runner');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');
var commanderRunner = require('./libs/CommanderRunner');

// Checks for available update and returns an instance
var notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version,
    updateCheckInterval: 1000 * 60 * 60
});

notifier.notify();


var program = require('commander');

program
    .version(pkg.version)
    .option('-c, --cli [boolean]', '通过命令行启动考核程序(非retro界面)')
    .parse(process.argv);

var options = {
    title: '前端工程师考核',
    subtitle: '本测试主要针对JavaScript部分，涵盖基本语法点、简单算法考核',
    taskDir: path.resolve(__dirname, 'questions'),
    helpFile: path.resolve(__dirname, 'help.txt'),
    version: 'v' + pkg.version,
    preferenceName: '.fe',
    helpTxt: '帮助',
    exitTxt: '退出',
    onFinish: function() {}
};

if (!program.cli) {

    TaskRunner.createMenu(options);

} else {
    commanderRunner(options);
}
