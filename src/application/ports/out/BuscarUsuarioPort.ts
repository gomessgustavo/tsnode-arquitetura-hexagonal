import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

interface BuscarUsuarioPort {
  buscar(usuarioId: number): Promise<Usuario | Erro>;
}

export default BuscarUsuarioPort;
