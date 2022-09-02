const container = require('../../app/container.js')
const createTestService = require('../services/test.service.js')

container.factory('TestService', createTestService)