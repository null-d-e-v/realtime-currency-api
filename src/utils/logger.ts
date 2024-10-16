import winston from "winston";

let date = new Date().toISOString();

const logFormat = winston.format.printf(function(info) {
  return `[${date}] [${info.level}] : ${info.message}\n`;
});


const get_transport = (transport: string) => {
  switch (transport) {
    case 'console': return [new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), logFormat) })];
    case 'file': return [new winston.transports.File({ filename: 'logger.dat', format: logFormat })];
    case 'both': return [new winston.transports.File({ filename: 'logger.dat', format: logFormat }), new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), logFormat) })];
    default: return [new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), logFormat) })]
  }
}

const DEFAULT_LEVEL = 2
const level_list = [
  'error',
  'warn',
  'info',
  'http',
  'verbose',
  'debug',
  'silly'
]

const logger_type = String(process.env.LOGGER)
const logger_level = String(process.env.LOGGER_LEVEL)

const transports = get_transport(logger_type)
const level = level_list.includes(logger_level) ? logger_level : level_list[DEFAULT_LEVEL]

const logger = winston.createLogger({
  transports,
  level,
})

export default logger
