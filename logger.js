const log4js = require('log4js');
const path = require('path');

function getCommonConfig(pathSeg) {
    return {
        type: 'dateFile',
        filename: path.resolve(__dirname, 'logs', pathSeg, 'logging.log'),
        maxLogSize: 1024 * 1024,
        daysTokeep: 3,
        pattern: 'yyyy-MM-dd hh',
        keepFileExt: true,
        layout: {
            type: "pattern",
            pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
        },
    }
}

log4js.configure({
    appenders: {
        sql: getCommonConfig('sql'),
        api: getCommonConfig('api'),
        default: {
            type: 'stdout',
        }
    },
    categories: {
        sql: {
            appenders: ['sql'],
            level: 'all'
        },
        api: {
            appenders: ['api', 'default'],
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        }
    }
});

process.on('exit', () => {
    log4js.shutdown();
});


exports.sqlLogger = log4js.getLogger('sql');
exports.logger = log4js.getLogger('default');
exports.apiLogger = log4js.getLogger('api');
