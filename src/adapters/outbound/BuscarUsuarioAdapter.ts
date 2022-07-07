import { Erro } from "../../application/core/domain/Erro";
import BuscarUsuarioPort from "../../application/ports/out/BuscarUsuarioPort";
import UsuarioMapper from "../inbound/mapper/UsuarioMapper";
import { UsuarioResponse } from "../inbound/response/UsuarioResponse";
import UsuarioRepository from "./repository/UsuarioRepository";

export class BuscarUsuarioAdapter implements BuscarUsuarioPort {
  constructor() {
    this.buscar = this.buscar.bind(this);
  }
  buscar = async (usuarioId: number): Promise<UsuarioResponse | Erro> => {
    try {
      const usuarioPorId = await UsuarioRepository.porId(usuarioId);
      if (!usuarioPorId) throw new Error();

      const response = UsuarioMapper.toResponse(usuarioPorId);

      return response;
    } catch (error) {
      console.log(error);
      return { mensagem: "Não foi encontrado o usuário", status: 400 };
    }
  };
}
