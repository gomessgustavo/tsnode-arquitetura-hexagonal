import { Erro } from "../../application/core/domain/Erro";
import { Usuario } from "../../application/core/domain/Usuario";
import BuscarUsuarioPort from "../../application/ports/out/BuscarUsuarioPort";
import UsuarioRepository from "./repository/UsuarioRepository";

export class BuscarUsuarioAdapter implements BuscarUsuarioPort {
  constructor() {
    this.buscar = this.buscar.bind(this);
  }
  buscar = async (usuarioId: number): Promise<Usuario | Erro> => {
    try {
      const usuarioPorId = await UsuarioRepository.porId(usuarioId);
      if (!usuarioPorId)
        throw new Erro("Não foi encontrado usuario com esse id", 404);

      return usuarioPorId;
    } catch (erro) {
      throw erro;
    }
  };
}
