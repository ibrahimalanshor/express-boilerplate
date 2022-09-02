const Container = require('../../app/container.js')
const createAuthController = require('../controllers/auth.controller.js')
const createAuthService = require('../services/auth.service.js')

const container = new Container

container.register('UserModel', {})
container.factory('AuthService', createAuthService, { userModel: 'UserModel' })
container.factory('AuthController', createAuthController, { authService: 'AuthService' })

module.exports = container