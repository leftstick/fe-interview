'use strict';



var CommanderRunner = function(program, options) {
    if (program.cli) {
        return require('./command/showcli')(options);
    } else if (program.answer) {
        return require('./command/showanswer')(options);
    }
};

module.exports = CommanderRunner;
