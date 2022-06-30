"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("../../../application/core/domain/Produto");
class ProdutoMapper {
    constructor() {
        this.toEntity = (produto) => {
            const produtoNovo = new Produto_1.Produto();
            return Object.assign(produtoNovo, produto);
        };
    }
}
exports.default = new ProdutoMapper();
