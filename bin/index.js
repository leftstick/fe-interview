#!/usr/bin/env node

const path = require('path');
const TaskRunner = require('terminal-task-runner');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const commanderRunner = require('./libs/CommanderRunner');

// Checks for available update and returns an instance
const notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version,
    updateCheckInterval: 1000 * 60 * 60
});

notifier.notify();


const program = require('commander');

program
    .version(pkg.version)
    .option('-c, --cli [boolean]', '通过命令行启动考核程序(非retro界面)')
    .option('-a, --answer [boolean]', '查阅答案')
    .parse(process.argv);

const options = {
    title: '前端工程师考核',
    subtitle: '本测试主要针对JavaScript部分，涵盖基本语法点、简单算法考核',
    taskDir: path.resolve(__dirname, 'questions'),
    helpFile: path.resolve(__dirname, 'help.txt'),
    version: 'v' + pkg.version,
    preferenceName: '.fe',
    helpTxt: '帮助',
    exitTxt: '退出',
    width: 65,
    onFinish: function() {}
};

if (program.rawArgs.length <= 2) {

    TaskRunner.createMenu(options);

} else {
    commanderRunner(program, options);
}
