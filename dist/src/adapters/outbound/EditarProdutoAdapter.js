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
exports.EditarProdutoAdapter = void 0;
const ProdutoRepository_1 = __importDefault(require("./repository/ProdutoRepository"));
class EditarProdutoAdapter {
    constructor() {
        this.editar = (produtoId, produto) => __awaiter(this, void 0, void 0, function* () {
            try {
                const produtoPorId = yield ProdutoRepository_1.default.findOne(produtoId);
                if (!produtoPorId) {
                    return { mensagem: "Não foi encontrado nenhum produto", status: 404 };
                }
                const produtoEditado = {
                    id: produtoId,
                    nome: produto.nome,
                    descricao: produto.descricao,
                    preco: produto.preco,
                };
                return yield ProdutoRepository_1.default.save(produtoEditado);
            }
            catch (error) {
                return { mensagem: "Não foi possível editar o produto", status: 400 };
            }
        });
        this.editar = this.editar.bind(this);
    }
}
exports.EditarProdutoAdapter = EditarProdutoAdapter;
