import { uuid } from "uuidv4";
import { Usuario } from "../../application/core/domain/Usuario";
import SalvarUsuarioPort from "../../application/ports/out/SalvarUsuarioPort";

export class FakeCriarUsuario implements SalvarUsuarioPort {
  private usuarios: Usuario[] = [];
  constructor() {
    this.criar = this.criar.bind(this);
  }

  criar = async (usuario: Usuario): Promise<Usuario> => {
    const novoUsuario = new Usuario();
    Object.assign(novoUsuario, {
      id: uuid(),
      nome: usuario.nome,
    });
    this.usuarios.push(novoUsuario);

    return novoUsuario;
  };
}
