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
exports.FakeCriarUsuario = void 0;
const uuidv4_1 = require("uuidv4");
const Usuario_1 = require("../../application/core/domain/Usuario");
class FakeCriarUsuario {
    constructor() {
        this.usuarios = [];
        this.criar = (usuario) => __awaiter(this, void 0, void 0, function* () {
            const novoUsuario = new Usuario_1.Usuario();
            Object.assign(novoUsuario, {
                id: uuidv4_1.uuid(),
                nome: usuario.nome,
            });
            this.usuarios.push(novoUsuario);
            return novoUsuario;
        });
        this.criar = this.criar.bind(this);
    }
}
exports.FakeCriarUsuario = FakeCriarUsuario;
