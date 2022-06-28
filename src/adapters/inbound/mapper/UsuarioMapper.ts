import { Usuario } from "../../../application/core/domain/Usuario";
import { UsuarioRequest } from "../request/UsuarioRequest";

class UsuarioMapper {
  toEntity = (request: UsuarioRequest): Usuario => {
    const usuario = new Usuario();
    return Object.assign(usuario, request);
  };
}

export default new UsuarioMapper();
