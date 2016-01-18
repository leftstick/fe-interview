'use strict';
var fs = require('fs');
var printFile = require('terminal-task-runner').printFile;

var Utils = {
    printCode: printFile,
    copyFile: function(src, dest) {
        fs.createReadStream(src)
            .pipe(fs.createWriteStream(dest));
    },
    fileExist: function(path) {
        return fs.existsSync(path) && fs.statSync(path).isFile();
    },
    folderExist: function(path) {
        return fs.existsSync(path) && fs.statSync(path).isDirectory();
    }
};

module.exports = Utils;
