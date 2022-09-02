const { isNotFound } = require('../utils/check');

function createTestService() {
  async function test() {
    isNotFound(null);
    return 'test';
  }

  return { test };
}

module.exports = createTestService;
