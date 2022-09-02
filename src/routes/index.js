const createAuthRoute = require('./auth.route.js');

module.exports = (router, container) => {
  createAuthRoute(router, container)
};