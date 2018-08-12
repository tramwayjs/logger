export default class Logger {
    static WARN = 'warn';
    static DEBUG = 'debug';
    static VERBOSE = 'verbose';
    static INFO = 'info';
    static ERROR = 'error';
    static SILLY = 'silly';

    constructor(loggerProvider) {
        this.loggerProvider = loggerProvider;
    }

    log(type, message) {
        this.loggerProvider.log(type, message);
    }

    warn(message) {
        this.loggerProvider.log(Logger.WARN, message);
    }

    debug(message) {
        this.loggerProvider.log(Logger.DEBUG, message);
    }

    verbose(message) {
        this.loggerProvider.log(Logger.VERBOSE, message);
    }

    info(message) {
        this.loggerProvider.log(Logger.INFO, message);
    }

    error(message) {
        this.loggerProvider.log(Logger.ERROR, message);
    }

    silly(message) {
        this.loggerProvider.log(Logger.SILLY, message);
    }
}