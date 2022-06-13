"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _ProdutoRepository = require('./repository/ProdutoRepository'); var _ProdutoRepository2 = _interopRequireDefault(_ProdutoRepository);

 class ListarProdutoAdapter  {
  constructor() {;ListarProdutoAdapter.prototype.__init.call(this);
    this.listar = this.listar.bind(this);
  }
  __init() {this.listar = async () => {
    try {
      const produtos = await _ProdutoRepository2.default.listar();
      return produtos.map((produto) => {
        return {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          preco: produto.preco,
        };
      });
    } catch (error) {
      throw error;
    }
  }}
} exports.ListarProdutoAdapter = ListarProdutoAdapter;
