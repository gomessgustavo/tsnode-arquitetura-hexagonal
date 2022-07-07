import { Usuario } from "../../core/domain/Usuario";

interface SalvarUsuarioPort {
  criar(usuario: Usuario): Promise<Usuario>;
}

export default SalvarUsuarioPort;
