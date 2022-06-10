"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../../../database'); var _database2 = _interopRequireDefault(_database);

class Produto extends _sequelize.Model {
  

  

  

  

  

  
}

Produto.init(
  {
    nome: _sequelize2.default.STRING,
    descricao: _sequelize2.default.STRING,
    preco: _sequelize2.default.BOOLEAN,
  },
  {
    sequelize: _database2.default.connection,
    freezeTableName: true,
  }
);

exports. default = Produto;
