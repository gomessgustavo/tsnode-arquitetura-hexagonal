import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

export interface LoginPort {
  logar(usuario: string): Promise<Usuario | Erro>;
}
