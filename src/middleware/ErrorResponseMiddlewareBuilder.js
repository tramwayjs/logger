export default class ErrorResponseMiddlewareBuilder {
    constructor(logger, config = {}) {
        this.logger = logger;
        this.config = config;
    }

    getMiddleware() {
        const {
            displayedEnvironments = [],
        } = this.config;

        return (err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = {};
            let error = {};

            const {
                status = 500,
                message,
                stack,
            } = err;

            if (displayedEnvironments.includes(req.app.get('env'))) {
                res.locals.error = err;
                error = {
                    status,
                    message,
                    stack,
                };
                return res.status(status).json(error);
            }

            res.sendStatus(status);
        };
    }
}