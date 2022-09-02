function createTestController({ testService }) {
  async function test(req, res, next) {
    try {
      const result = await testService.test();

      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  return { test };
}

module.exports = createTestController;
