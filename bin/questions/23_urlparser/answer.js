/**
 *
 *  尝试完成如下功能：
 *
 *  const fullUrl = 'https://github.com/tj/lkk?tab=repositories&date=20160118&ttt=sss';
 *
 *  urlparser(fullUrl) // { protocol: 'https', host: 'github.com', path: '/tj/lkk', query: { tab: 'repositories', date: '20160118', ttt: 'sss' } }
 *
 *  const simpleUrl = 'http://www.baidu.com';
 *
 *  urlparser(simpleUrl) // { protocol: 'http', host: 'www.baidu.com' }
 *
 **/
const urlparser = function(url) {
    const result = /^(?:(https?):)\/\/([\.\-\w]+)(?:([\/\w]+))?(?:\?([\w=&]+))?$/.exec(url);

    const parsed = {protocol: result[1], host: result[2]};

    if (result[3]) {
        parsed.path = result[3];
    }

    if (result[4]) {
        parsed.query = result[4].split('&')
            .map((query) => query.split('='))
            .reduce((params, pairs) => (params[pairs[0]] = pairs[1], params), {});
    }

    return parsed;
};

module.exports = urlparser;
