import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

export interface SalvarUsuarioServicePort {
  criar(usuario: Usuario): Promise<Usuario | Erro>;
}
