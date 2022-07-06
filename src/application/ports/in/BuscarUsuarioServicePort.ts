import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import { Erro } from "../../core/domain/Erro";

interface BuscarUsuarioServicePort {
  buscar(usuarioId: number): Promise<UsuarioResponse | Erro>;
}

export default BuscarUsuarioServicePort;
