"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _SalvarProdutoService = require('../../application/core/service/SalvarProdutoService');
var _ProdutoEntity = require('./entity/ProdutoEntity'); var _ProdutoEntity2 = _interopRequireDefault(_ProdutoEntity);
// import { CriarProdutoRequest } from "./request/CriarProdutoRequest";

var _tsyringe = require('tsyringe');
var _ListarProdutoService = require('application/core/service/ListarProdutoService');

class ProdutoController {
  async salvar(req, res) {
    const salvarProdutoService = _tsyringe.container.resolve(_SalvarProdutoService.SalvarProdutoService);
    const { body } = req;
    const produto = body ;
    salvarProdutoService.criar(produto);
    res.send(produto);
  }

  async listagem(_, res) {
    const listarProdutosService = _tsyringe.container.resolve(_ListarProdutoService.ListarProdutoService);
    const produtos = await listarProdutosService.listar();
    res.send(produtos);
  }

  async porId(req, res) {
    const produto = await _ProdutoEntity2.default.findByPk(req.params.id);

    res.send(produto);
  }
}

exports. default = new ProdutoController();
