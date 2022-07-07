import { Erro } from "../../application/core/domain/Erro";
import { Usuario } from "../../application/core/domain/Usuario";
import SalvarUsuarioPort from "../../application/ports/out/SalvarUsuarioPort";
import UsuarioRepository from "./repository/UsuarioRepository";

export class SalvarUsuarioAdapter implements SalvarUsuarioPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (usuario: Usuario): Promise<Usuario> => {
    try {
      return await UsuarioRepository.salvar(usuario);
    } catch (erro) {
      throw erro;
    }
  };
}
