"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("../../../application/core/domain/Usuario");
class UsuarioMapper {
    constructor() {
        this.toEntity = (request) => {
            const usuario = new Usuario_1.Usuario();
            return Object.assign(usuario, request);
        };
    }
}
exports.default = new UsuarioMapper();
