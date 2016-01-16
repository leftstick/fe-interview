'use strict';
var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({renderer: new TerminalRenderer()});

var Utils = {
    printCode: function(filePath) {

        console.log(marked(fs.readFileSync(filePath, {
            encoding: 'utf8'
        })));
    }
};

module.exports = Utils;
