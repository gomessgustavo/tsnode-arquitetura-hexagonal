import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

interface SalvarUsuarioPort {
  criar(usuario: Usuario): Promise<Usuario | Erro>;
}

export default SalvarUsuarioPort;
