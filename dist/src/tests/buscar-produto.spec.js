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
const ProcurarProdutoService_1 = require("../application/core/service/ProcurarProdutoService");
const FakeBuscarProduto_1 = require("./fakes/FakeBuscarProduto");
let fakeBuscarProduto;
let service;
describe("Buscar produto por id", () => {
    beforeEach(() => {
        fakeBuscarProduto = new FakeBuscarProduto_1.FakeBuscarProduto();
        service = new ProcurarProdutoService_1.ProcurarProdutoService(fakeBuscarProduto);
    });
    it("Deve buscar um produto com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 1;
        const retorno = yield service.procurar(id);
        expect(retorno).toHaveProperty("id");
    }));
    it("Deve buscar um produto e não encontrar", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 2;
        const retorno = yield service.procurar(id);
        const erro = retorno;
        expect(erro.status).toBe(404);
        expect(erro.mensagem).toBe("Não foi encontrado nenhum produto com o id");
    }));
});
