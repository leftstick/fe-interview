'use strict';
var fs = require('fs');
var colorsTmpl = require('colors-tmpl');

var Utils = {
    printFile: function(filePath) {
        var contents;
        try {
            contents = fs.readFileSync(filePath, {
                encoding: 'utf8'
            });

            contents = colorsTmpl(contents);

            console.log(contents);
        } catch (e) {
            throw e;
        }

    }
};

module.exports = Utils;
