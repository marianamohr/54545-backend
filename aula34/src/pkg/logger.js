const winston = require("winston");

const ENV = "prod";

const devLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: "http" }),
    new winston.transports.File({ filename: "./error.log", level: "warn" }),
  ],
});

const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: "http" }),
    new winston.transports.File({ filename: "./error.log", level: "warn" }),
  ],
});

const log = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.info(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.debug(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.warn(`${req.method} na ${req.url} - ${new Date()}`);

  next();
};

module.exports = log;
