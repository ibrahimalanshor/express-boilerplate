function createAuthService({ userModel }) {
  async function login(credential) {
    return {
      token: 'token'
    }
  }

  return { login }
}

module.exports = createAuthService