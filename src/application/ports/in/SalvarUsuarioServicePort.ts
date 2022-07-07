import { UsuarioRequest } from "../../../adapters/inbound/request/UsuarioRequest";
import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import { Erro } from "../../core/domain/Erro";

export interface SalvarUsuarioServicePort {
  criar(usuario: UsuarioRequest): Promise<UsuarioResponse>;
}
