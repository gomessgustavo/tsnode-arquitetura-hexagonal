import { inject, injectable } from "tsyringe";
import { SalvarUsuarioServicePort } from "../../ports/in/SalvarUsuarioServicePort";
import SalvarUsuarioPort from "../../ports/out/SalvarUsuarioPort";
import { Usuario } from "../domain/Usuario";

@injectable()
export class SalvarUsuarioService implements SalvarUsuarioServicePort {
  constructor(
    @inject("SalvarUsuarioAdapter")
    private salvarUsuarioPort: SalvarUsuarioPort
  ) {
    this.criar = this.criar.bind(this);
  }

  criar = async (usuario: Usuario) => {
    return this.salvarUsuarioPort.criar(usuario);
  };
}
