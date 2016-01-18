'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var fullUrl = 'https://github.com/tj/lkk?tab=repositories&date=20160118&ttt=sss';
 *
 *  urlparser(fullUrl) // { protocol: 'https', host: 'github.com', path: '/tj/lkk', query: { tab: 'repositories', date: '20160118', ttt: 'sss' } }
 *
 *  var simpleUrl = 'http://www.baidu.com';
 *
 *  urlparser(simpleUrl) // { protocol: 'http', host: 'www.baidu.com' }
 *
 **/
var urlparser = function(url) {
    var result = /^(?:(https?):)\/\/([0-9\.\-A-Za-z_]+)(?:([\/a-zA-Z0-9_]+))?(?:\?([a-zA-Z_0-9=&]+))?$/.exec(url);

    var parsed = {
        protocol: result[1],
        host: result[2],
        path: result[3],
        query: result[4] && result[4].split('&')
                .reduce(function(previous, i) {
                    var tmp = i.split('='),
                        key = tmp[0],
                        value = tmp[1];
                    previous[key] = value;
                    return previous;
                }, {})
    };

    Object
        .keys(parsed)
        .forEach(function(key) {
            if (typeof parsed[key] === 'undefined') {
                delete parsed[key];
            }
        });

    return parsed;
};

module.exports = urlparser;
