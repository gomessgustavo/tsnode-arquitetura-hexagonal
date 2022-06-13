"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _ProdutoEntity = require('../../inbound/entity/ProdutoEntity'); var _ProdutoEntity2 = _interopRequireDefault(_ProdutoEntity);

class ProdutoRepository {constructor() { ProdutoRepository.prototype.__init.call(this);ProdutoRepository.prototype.__init2.call(this); }
  __init() {this.salvar = (produto) => {
    const { id, nome, descricao, preco } = produto;
    return _ProdutoEntity2.default.create({ id, nome, descricao, preco });
  }}

  __init2() {this.listar = () => {
    return _ProdutoEntity2.default.findAll();
  }}
}

exports. default = new ProdutoRepository();
