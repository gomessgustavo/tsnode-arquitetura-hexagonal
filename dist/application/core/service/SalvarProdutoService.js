"use strict";Object.defineProperty(exports, "__esModule", {value: true});



 class SalvarProdutoService  {
  
  constructor() {;SalvarProdutoService.prototype.__init.call(this);
    this.criar = this.criar.bind(this);
  }

  __init() {this.criar = async (produto) => {
    return this.salvarProdutoPort.criar(produto);
  }}
} exports.SalvarProdutoService = SalvarProdutoService;
