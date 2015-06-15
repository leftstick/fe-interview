#!/usr/bin/env node

'use strict';

var path = require('path');
var TaskRunner = require('terminal-task-runner');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');

// Checks for available update and returns an instance
var notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version,
    updateCheckInterval: 1000 * 60 * 60
});

notifier.notify();


var options = {
    title: '前端基本知识考核',
    subtitle: '本测试涵盖基本语法点、简单算法、',
    taskDir: path.resolve(__dirname, 'questions'),
    helpFile: path.resolve(__dirname, 'help.txt'),
    version: 'v' + pkg.version,
    preferenceName: '.fe'
};

TaskRunner.createMenu(options);
