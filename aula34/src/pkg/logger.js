const winston = require("winston");

const ENV = "prod";

const customLevelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    fatal: "red",
    error: "orange",
    info: "blue",
    debug: "white",
  },
};
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({ colors: customLevelOptions.colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "./error.log",
      level: "fatal",
      format: winston.format.simple(),
    }),
  ],
});



const log = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.info(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.debug(`${req.method} na ${req.url} - ${new Date()}`);

  next();
};

module.exports = log;
