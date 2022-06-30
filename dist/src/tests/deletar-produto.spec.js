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
require("reflect-metadata");
const FakeDeletarProduto_1 = require("./fakes/FakeDeletarProduto");
const DeletarProdutoService_1 = require("../application/core/service/DeletarProdutoService");
let fakeDeletarProduto;
let service;
describe("Deletar produto", () => {
    beforeEach(() => {
        fakeDeletarProduto = new FakeDeletarProduto_1.FakeDeletarProduto();
        service = new DeletarProdutoService_1.DeletarProdutoService(fakeDeletarProduto);
    });
    it("Deve deletar um produto com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 1;
        const retorno = yield service.deletar(id);
        expect(retorno).toBe(id);
    }));
    it("Deve tentar deletar um produto não existente", () => __awaiter(void 0, void 0, void 0, function* () {
        const retorno = yield service.deletar(2);
        const erro = retorno;
        expect(erro.status).toBe(404);
        expect(erro.mensagem).toBe("Não foi possível deletar o produto");
    }));
});
