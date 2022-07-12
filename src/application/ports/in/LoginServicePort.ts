import { TokenResponse } from "../../../adapters/inbound/response/TokenResponse";
import { Erro } from "../../core/domain/Erro";

export interface LoginServicePort {
  logar(apelido: string, senha: string): Promise<TokenResponse | Erro>;
}
