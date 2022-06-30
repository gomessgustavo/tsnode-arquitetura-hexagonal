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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const SalvarProdutoService_1 = require("../../application/core/service/SalvarProdutoService");
const tsyringe_1 = require("tsyringe");
const ListarProdutoService_1 = require("../../application/core/service/ListarProdutoService");
const DeletarProdutoService_1 = require("../../application/core/service/DeletarProdutoService");
const ProcurarProdutoService_1 = require("../../application/core/service/ProcurarProdutoService");
const EditarProdutoService_1 = require("../../application/core/service/EditarProdutoService");
const Response_1 = require("../../application/core/http/Response");
const ProdutoMapper_1 = __importDefault(require("./mapper/ProdutoMapper"));
class ProdutoController {
    salvar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salvarProdutoService = tsyringe_1.container.resolve(SalvarProdutoService_1.SalvarProdutoService);
            const { body } = req;
            const produtoMapeado = ProdutoMapper_1.default.toEntity(body);
            const produtoCriado = yield salvarProdutoService.criar(produtoMapeado);
            const formataResponse = Response_1.getResponse(produtoCriado, 201);
            res.status(formataResponse.status).json(formataResponse.data);
        });
    }
    listagem(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listarProdutosService = tsyringe_1.container.resolve(ListarProdutoService_1.ListarProdutoService);
            const produtos = yield listarProdutosService.listar();
            const formataResponse = Response_1.getResponse(produtos);
            res.status(formataResponse.status).json(formataResponse.data);
        });
    }
    porId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const procurarProdutoService = tsyringe_1.container.resolve(ProcurarProdutoService_1.ProcurarProdutoService);
            const { id } = req.params;
            const produtoId = parseInt(id) | 0;
            const produto = yield procurarProdutoService.procurar(produtoId);
            const formataResponse = Response_1.getResponse(produto);
            res.status(formataResponse.status).json(formataResponse.data);
        });
    }
    deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletarProdutoService = tsyringe_1.container.resolve(DeletarProdutoService_1.DeletarProdutoService);
            const { id } = req.params;
            const produtoId = parseInt(id) | 0;
            const response = yield deletarProdutoService.deletar(produtoId);
            const formataResponse = Response_1.getResponse(response, 204);
            res.status(formataResponse.status).json();
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const editarProdutoService = tsyringe_1.container.resolve(EditarProdutoService_1.EditarProdutoService);
            const { id } = req.params;
            const produtoId = parseInt(id) | 0;
            const produtoMapeado = ProdutoMapper_1.default.toEntity(req.body);
            const response = yield editarProdutoService.editar(produtoId, produtoMapeado);
            const formataResponse = Response_1.getResponse(response);
            res.status(formataResponse.status).json(formataResponse.data);
        });
    }
}
exports.ProdutoController = ProdutoController;
