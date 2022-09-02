function createAuthController({ authService }) {
  async function login(req, res, next) {
    const result = await authService.login(req.body)

    return res.json(result)
  }

  return { login }
}

module.exports = createAuthController