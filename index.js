const express = require('express')
const createAuthRoute = require('./src/routes/auth.route.js')

const server = express()

const createAuthController = require('./src/controllers/auth.controller.js')
const createAuthService = require('./src/services/auth.service.js')
const Container = require('./bottle.js')

const app = new Container

const userModel = {
  find: () => 'anjay'
}

app.register('gue', 'sheez') 
app.register('UserModel', userModel)
app.factory('AuthService', createAuthService, { userModel: 'UserModel' })
app.factory('AuthController', createAuthController, { authService: 'AuthService' })

createAuthRoute(server, app)

server.listen(4000, () => {
  console.log('server running')
})