
/**
 *
 *  尝试完成如下功能：
 *
 *  console.log(camelcase('HELLO WORLD')); // helloWorld
 *
 *  console.log(camelcase('HELLO         WORLD')); // helloWorld
 *
 *  console.log(camelcase('drunkman')); // drunkman
 *
 *  console.log(camelcase('hi----you')); // hiYou
 *
 **/
const camelcase = function(str) {
    return str.toLowerCase()
        .replace(/(\s+|-+)(.)/g, function(matched, separator, letter) {
            return letter.toUpperCase();
        });
};

module.exports = camelcase;
