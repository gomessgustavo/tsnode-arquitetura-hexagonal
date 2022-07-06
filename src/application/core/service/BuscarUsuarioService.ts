import { inject, injectable } from "tsyringe";
import BuscarUsuarioServicePort from "../../ports/in/BuscarUsuarioServicePort";
import BuscarUsuarioPort from "../../ports/out/BuscarUsuarioPort";

@injectable()
export class BuscarUsuarioSevice implements BuscarUsuarioServicePort {
  constructor(
    @inject("BuscarUsuarioAdapter")
    private buscarUsuarioPort: BuscarUsuarioPort
  ) {
    this.buscar = this.buscar.bind(this);
  }

  buscar = async (usuarioId: number) => {
    return this.buscarUsuarioPort.buscar(usuarioId);
  };
}
