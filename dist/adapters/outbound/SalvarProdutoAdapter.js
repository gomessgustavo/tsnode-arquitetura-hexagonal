"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _ProdutoEntity = require('../../adapters/inbound/entity/ProdutoEntity'); var _ProdutoEntity2 = _interopRequireDefault(_ProdutoEntity);


 class SalvarProdutoAdapter  {
  constructor() {;SalvarProdutoAdapter.prototype.__init.call(this);
    this.criar = this.criar.bind(this);
  }
  __init() {this.criar = async (produto) => {
    try {
      const { nome, descricao, preco } = produto;
      await _ProdutoEntity2.default.create({ nome, descricao, preco });
      return { id: 2, nome, descricao, preco };
    } catch (error) {
      throw error;
    }
  }}
} exports.SalvarProdutoAdapter = SalvarProdutoAdapter;
