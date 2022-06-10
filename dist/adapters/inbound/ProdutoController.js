"use strict";Object.defineProperty(exports, "__esModule", {value: true});



class ProdutoController {
  

  async store(req) {
    const { body } = req;
    const produto = body ;
    return this.salvarProdutoServicePort.criar(produto);
  }
}

exports. default = new ProdutoController();
