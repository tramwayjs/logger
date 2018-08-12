export default class ErrorLoggerMiddlewareBuilder {
    constructor(logger, config = {}) {
        this.logger = logger;
        this.config = config;
    }

    getMiddleware() {
        const {
            transformIp = ip => ip,
        } = this.config;

        return (err, req, res, next) => {
            const {
                status = 500,
                message,
                stack,
            } = err;

            const {
                originalUrl,
                method,
                ip
            } = req;

            this.logger.error({
                status,
                message,
                originalUrl,
                method,
                ip: transformIp(ip),
                stack
            });

            return next(err, req, res);
        };
    }
}