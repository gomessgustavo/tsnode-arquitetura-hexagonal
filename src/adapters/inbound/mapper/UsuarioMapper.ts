import { Usuario } from "../../../application/core/domain/Usuario";
import { UsuarioRequest } from "../request/UsuarioRequest";
import { UsuarioResponse } from "../response/UsuarioResponse";
import VeiculoMapper from "./VeiculoMapper";

class UsuarioMapper {
  toEntity = (request: UsuarioRequest): Usuario => {
    const usuario = new Usuario();

    usuario.nome = request.nome;
    usuario.cep = request.cep;
    usuario.idade = request.idade;
    usuario.senha = request.senha;

    return usuario;
  };

  toResponse = (entity: Usuario): UsuarioResponse => {
    const usuario = new UsuarioResponse();
    usuario.nome = entity.nome;
    usuario.bairro = entity.bairro;
    usuario.cep = entity.cep;
    usuario.complemento = entity.complemento;
    usuario.idade = entity.idade;
    usuario.localidade = entity.localidade;
    usuario.logradouro = entity.logradouro;
    usuario.uf = entity.uf;
    usuario.veiculos = VeiculoMapper.toResponseVeiculos(entity.veiculos);

    return usuario;
  };
}

export default new UsuarioMapper();
