import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

interface BuscarUsuarioPort {
  buscar(usuarioId: number): Promise<UsuarioResponse | Erro>;
}

export default BuscarUsuarioPort;
