const { apiLogger } = require('../../logger');
const log4js = require("log4js");

// module.exports = (req,res,next)=>{
//     next()
//     apiLogger.info(`${req.path} ${req.method}`);
// }

module.exports = log4js.connectLogger(apiLogger, {
    level: 'info',
}
  )