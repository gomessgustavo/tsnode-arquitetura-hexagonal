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
exports.FakeCriarProduto = void 0;
const uuidv4_1 = require("uuidv4");
const Produto_1 = require("../../application/core/domain/Produto");
class FakeCriarProduto {
    constructor() {
        this.produtos = [];
        this.criar = (produto) => __awaiter(this, void 0, void 0, function* () {
            const novoProduto = new Produto_1.Produto();
            Object.assign(novoProduto, {
                id: uuidv4_1.uuid(),
                nome: produto.nome,
                descricao: produto.descricao,
                preco: produto.preco,
            });
            a;
            this.produtos.push(novoProduto);
            return novoProduto;
        });
        this.criar = this.criar.bind(this);
    }
}
exports.FakeCriarProduto = FakeCriarProduto;
