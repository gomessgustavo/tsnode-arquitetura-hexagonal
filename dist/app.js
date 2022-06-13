"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _database = require('./database'); var _database2 = _interopRequireDefault(_database);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  

   constructor() {
    this.servidor = _express2.default.call(void 0, );

    this.middlewares();
    this.routes();
    this.database();
  }

   middlewares() {
    this.servidor.use(_cors2.default.call(void 0, ));
    this.servidor.use(_express2.default.json());
  }

   routes() {
    this.servidor.use(_routes2.default);
  }

   async database() {
    const { connection } = _database2.default;
    try {
      await connection.sync();
    } catch (erro) {
      console.log(erro);
    }
  }
}

exports. default = new App().servidor;
