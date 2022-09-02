const createApp = require('./app/app.js')
const config = require('./config');
const setupRoute = require('./src/routes')
const setupMiddleware = require('./src/middlewares/global')

require('./src/providers')

const server = createApp({
  env: config.env,
  port: config.app.port,
  setupRoute,
  setupMiddleware
})

server.run()