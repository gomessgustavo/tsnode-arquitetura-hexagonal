import { inject, injectable } from "tsyringe";
import UsuarioMapper from "../../../adapters/inbound/mapper/UsuarioMapper";
import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import BuscarUsuarioServicePort from "../../ports/in/BuscarUsuarioServicePort";
import BuscarUsuarioPort from "../../ports/out/BuscarUsuarioPort";
import { Erro } from "../domain/Erro";

@injectable()
export class BuscarUsuarioSevice implements BuscarUsuarioServicePort {
  constructor(
    @inject("BuscarUsuarioAdapter")
    private buscarUsuarioPort: BuscarUsuarioPort
  ) {
    this.buscar = this.buscar.bind(this);
  }

  buscar = async (usuarioId: number): Promise<UsuarioResponse | Erro> => {
    try {
      const usuario = await this.buscarUsuarioPort.buscar(usuarioId);
      if (usuario instanceof Erro) {
        throw usuario;
      }

      return UsuarioMapper.toResponse(usuario);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao listar os produtos", 400);
    }
  };
}
