import { UsuarioRequest } from "../../../adapters/inbound/request/UsuarioRequest";
import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import { Erro } from "../../core/domain/Erro";

interface SalvarUsuarioPort {
  criar(usuario: UsuarioRequest): Promise<UsuarioResponse | Erro>;
}

export default SalvarUsuarioPort;
