"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ProdutoRepository = require('./repository/ProdutoRepository'); var _ProdutoRepository2 = _interopRequireDefault(_ProdutoRepository);

 class SalvarProdutoAdapter  {
  constructor() {;SalvarProdutoAdapter.prototype.__init.call(this);
    this.criar = this.criar.bind(this);
  }
  __init() {this.criar = async (produto) => {
    try {
      const produtoNovo = await _ProdutoRepository2.default.salvar(produto);
      return {
        id: produtoNovo.id,
        nome: produtoNovo.nome,
        descricao: produtoNovo.descricao,
        preco: produtoNovo.preco,
      };
    } catch (error) {
      throw error;
    }
  }}
} exports.SalvarProdutoAdapter = SalvarProdutoAdapter;
