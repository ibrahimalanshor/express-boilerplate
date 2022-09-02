function createTestService() {
    async function test() {
      return 'test'
    }
  
    return { test }
  }
  
  module.exports = createTestService