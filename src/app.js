const express = require('express');
const morgan = require('morgan');

class App {
  app;
  config;

  constructor(config) {
    this.setConfig(config);
    this.setApp();
    this.setMiddleware();
    this.setRoute();
  }

  setConfig(config) {
    this.config = {
      port: config?.port || 4000,
    };
  }

  setApp() {
    this.app = express();
  }

  setMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(morgan('tiny'));
  }

  setRoute() {
    this.app.use('/', (req, res) => res.json('hello world'));
  }

  run() {
    const { port } = this.config;

    this.app.listen(port, () => console.log(`App running on ${port}`));
  }
}

module.exports = App;
