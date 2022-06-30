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
const ListarProdutoService_1 = require("../application/core/service/ListarProdutoService");
const FakeListarProduto_1 = require("./fakes/FakeListarProduto");
let fakeListarProduto;
let service;
describe("Listagem de produto", () => {
    beforeEach(() => {
        fakeListarProduto = new FakeListarProduto_1.FakeListarProduto();
        service = new ListarProdutoService_1.ListarProdutoService(fakeListarProduto);
    });
    it("Deve listar produtos com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const retorno = yield service.listar();
        expect(retorno).toStrictEqual([]);
    }));
});
