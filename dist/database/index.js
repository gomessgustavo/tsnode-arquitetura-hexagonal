"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Database {
  

  constructor() {
    this.init();
  }

  init() {
    this.connection = new _sequelize2.default.Sequelize(
      "crud-loja",
      "postgres",
      "123456",
      { port: 5433, dialect: "postgres", host: "localhost" }
    );
  }
}

const database = new Database();

exports. default = database;
