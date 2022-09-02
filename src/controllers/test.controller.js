function createTestController({ testService }) {
    async function test(req, res, next) {
      const result = await testService.test()
  
      return res.json(result)
    }
  
    return { test }
  }
  
  module.exports = createTestController