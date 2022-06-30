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
const FakeCriarProduto_1 = require("./fakes/FakeCriarProduto");
let fakeCriarProduto;
let service;
describe("Cadastro de produto", () => {
    beforeEach(() => {
        fakeCriarProduto = new FakeCriarProduto_1.FakeCriarProduto();
        service = new SalvarProdutoService(fakeCriarProduto);
    });
    it("Deve cadastrar um produto novo com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const produtoNovo = {
            nome: "Lápis",
            descricao: "Lápis colorido faber castell",
            preco: 10,
        };
        const retorno = yield service.criar(produtoNovo);
        expect(retorno).toHaveProperty("id");
    }));
});
