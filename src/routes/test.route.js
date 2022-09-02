const container = require('../../app/container.js');

module.exports = (router) => {
  router.get('/test', container.get('TestController').test);
};
