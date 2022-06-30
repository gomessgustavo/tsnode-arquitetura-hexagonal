"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeEditarProduto = void 0;
class FakeEditarProduto {
    constructor() {
        this.produtos = [
            { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
        ];
        this.editar = (produtoId, produto) => __awaiter(this, void 0, void 0, function* () {
            const produtoProcurado = this.produtos.find(({ id }) => id === produtoId);
            if (produtoProcurado) {
                produtoProcurado.descricao = produto.descricao;
                produtoProcurado.nome = produto.nome;
                produtoProcurado.preco = produto.preco;
                return produtoProcurado;
            }
            return {
                mensagem: "Não foi encontrado nenhum produto",
                status: 404,
            };
        });
        this.editar = this.editar.bind(this);
    }
}
exports.FakeEditarProduto = FakeEditarProduto;
