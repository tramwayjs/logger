export default class NotFoundMiddlewareBuilder {
    constructor(logger, config = {}) {
        this.logger = logger;
        this.config = config;
    }

    getMiddleware() {
        const {
            transformIp = ip => ip,
        } = this.config;

        return (req, res, next) => {
            const {
                originalUrl,
                method,
                ip,
                route,
            } = req;

            if (!route) {
                this.logger.info({
                    status: 404,
                    originalUrl,
                    method,
                    ip: transformIp(ip),
                    message: "Route not found",
                });
            }

            next();
        };
    }
}