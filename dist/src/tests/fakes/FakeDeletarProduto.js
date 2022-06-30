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
exports.FakeDeletarProduto = void 0;
class FakeDeletarProduto {
    constructor() {
        this.produtos = [
            { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
        ];
        this.deletar = (produtoId) => __awaiter(this, void 0, void 0, function* () {
            const temProduto = this.produtos.some(({ id }) => id === produtoId);
            if (temProduto) {
                this.produtos = this.produtos.filter((produto) => produto.id !== produtoId);
                return produtoId;
            }
            else {
                return {
                    mensagem: "Não foi possível deletar o produto",
                    status: 404,
                };
            }
        });
        this.deletar = this.deletar.bind(this);
    }
}
exports.FakeDeletarProduto = FakeDeletarProduto;
