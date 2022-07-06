import { Usuario } from "../../../application/core/domain/Usuario";
import UsuarioEntity from "../entity/UsuarioEntity";
import { UsuarioRequest } from "../request/UsuarioRequest";
import { UsuarioResponse } from "../response/UsuarioResponse";

class UsuarioMapper {
  toEntity = (request: UsuarioRequest): Usuario => {
    const usuario = new Usuario();

    usuario.nome = request.nome;
    usuario.cep = request.cep;
    usuario.idade = request.idade;
    usuario.senha = request.senha;

    return usuario;
  };

  toResponse = (entity: UsuarioEntity): UsuarioResponse => {
    const usuario = new UsuarioResponse();

    usuario.nome = entity.nome;
    usuario.bairro = entity.bairro;
    usuario.cep = entity.cep;
    usuario.complemento = entity.complemento;
    usuario.idade = entity.idade;
    usuario.localidade = entity.localidade;
    usuario.logradouro = entity.logradouro;
    usuario.uf = entity.uf;
    usuario.veiculos = entity.veiculos;

    return usuario;
  };
}

export default new UsuarioMapper();
