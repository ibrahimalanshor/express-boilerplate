const container = require('../../app/container.js');
const createTestController = require('../controllers/test.controller.js');

container.factory('TestController', createTestController, {
  testService: 'TestService',
});
