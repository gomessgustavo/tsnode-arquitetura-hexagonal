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
exports.UsuarioController = void 0;
const tsyringe_1 = require("tsyringe");
const Response_1 = require("../../application/core/http/Response");
const SalvarUsuarioService_1 = require("../../application/core/service/SalvarUsuarioService");
const UsuarioMapper_1 = __importDefault(require("./mapper/UsuarioMapper"));
class UsuarioController {
    salvar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salvarUsuarioService = tsyringe_1.container.resolve(SalvarUsuarioService_1.SalvarUsuarioService);
            const { body } = req;
            const usuarioMapeado = UsuarioMapper_1.default.toEntity(body);
            const usuarioCriado = yield salvarUsuarioService.criar(usuarioMapeado);
            const formataResponse = Response_1.getResponse(usuarioCriado, 201);
            res.status(formataResponse.status).send(formataResponse.data);
        });
    }
}
exports.UsuarioController = UsuarioController;
