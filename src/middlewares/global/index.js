const testMiddleware = require('./test.middleware.js')

module.exports = (router) => {
    const middlewares = [testMiddleware]

    middlewares.forEach(middleware => router.use(middleware))
};