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
require("../application/shared");
const ProdutoController_1 = require("../adapters/inbound/ProdutoController");
const tsyringe_1 = require("tsyringe");
const FakeCriarProduto_1 = require("./fakes/FakeCriarProduto");
const express_1 = require("@jest-mock/express");
const FakeListarProduto_1 = require("./fakes/FakeListarProduto");
const FakeBuscarProduto_1 = require("./fakes/FakeBuscarProduto");
const FakeDeletarProduto_1 = require("./fakes/FakeDeletarProduto");
const FakeEditarProduto_1 = require("./fakes/FakeEditarProduto");
describe("Produto controller", () => {
    let produtoController = new ProdutoController_1.ProdutoController();
    let mockResponse;
    beforeEach(() => {
        mockResponse = express_1.getMockRes().res;
        tsyringe_1.container.registerSingleton("SalvarProdutoAdapter", FakeCriarProduto_1.FakeCriarProduto);
        tsyringe_1.container.registerSingleton("ListarProdutoAdapter", FakeListarProduto_1.FakeListarProduto);
        tsyringe_1.container.registerSingleton("ProcurarProdutoAdapter", FakeBuscarProduto_1.FakeBuscarProduto);
        tsyringe_1.container.registerSingleton("DeletarProdutoAdapter", FakeDeletarProduto_1.FakeDeletarProduto);
        tsyringe_1.container.registerSingleton("EditarProdutoAdapter", FakeEditarProduto_1.FakeEditarProduto);
    });
    afterAll(() => {
        jest.resetAllMocks();
    });
    it("Deve fazer requisição de criar com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const produto = {
            nome: "Caneta",
            descricao: "Caneta Bic",
            preco: 0.25,
        };
        const mockRequest = express_1.getMockReq({ body: produto });
        yield produtoController.salvar(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(201);
    }));
    it("Deve fazer requisição de buscar os produtos", () => __awaiter(void 0, void 0, void 0, function* () {
        const produtos = [];
        const mockRequest = express_1.getMockReq();
        yield produtoController.listagem(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith(produtos);
    }));
    it("Deve fazer requisição de buscar o produto por id", () => __awaiter(void 0, void 0, void 0, function* () {
        const produto = {
            id: 1,
            nome: "Caneta",
            descricao: "Caneta da marca bic",
            preco: 0.25,
        };
        const mockRequest = express_1.getMockReq({ params: { id: "1" } });
        yield produtoController.porId(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith(produto);
    }));
    it("Deve fazer requisição de buscar o produto por id e não encontrar", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRequest = express_1.getMockReq({ params: { id: "2" } });
        yield produtoController.porId(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalled();
    }));
    it("Deve deletar produto com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRequest = express_1.getMockReq({ params: { id: "1" } });
        yield produtoController.deletar(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(204);
        expect(mockResponse.send).toHaveBeenCalled();
    }));
    it("Deve não conseguir deletar produto", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRequest = express_1.getMockReq({ params: { id: "2" } });
        yield produtoController.deletar(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalled();
    }));
    it("Deve fazer requisição de editar com sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        const produto = {
            nome: "Lápis",
            descricao: "Lápis de colorir",
            preco: 0.25,
        };
        const mockRequest = express_1.getMockReq({ body: produto, params: { id: "1" } });
        yield produtoController.editar(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith(Object.assign({ id: 1 }, produto));
        expect(mockResponse.status).toHaveBeenCalledWith(200);
    }));
    it("Deve fazer requisição de editar e não encontrar o produto", () => __awaiter(void 0, void 0, void 0, function* () {
        const produto = {
            nome: "Lápis",
            descricao: "Lápis de colorir",
            preco: 0.25,
        };
        const mockRequest = express_1.getMockReq({ body: produto, params: { id: "2" } });
        yield produtoController.editar(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalledWith("Não foi encontrado nenhum produto");
        expect(mockResponse.status).toHaveBeenCalledWith(404);
    }));
});
