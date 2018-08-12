export default class LoggerMiddlewareBuilder {
    constructor(...middleware) {
        this.middleware = middleware;
    }

    getMiddleware() {
        return this.middleware.map(middleware => middleware.getMiddleware());
    }
}