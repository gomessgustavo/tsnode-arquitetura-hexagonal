import { inject, injectable } from "tsyringe";
import { SalvarVeiculoServicePort } from "../../ports/in/SalvarVeiculoServicePort";
import SalvarVeiculoPort from "../../ports/out/SalvarVeiculoPort";
import { Veiculo } from "../domain/Veiculo";

@injectable()
export class SalvarVeiculoService implements SalvarVeiculoServicePort {
  constructor(
    @inject("SalvarVeiculoAdapter")
    private salvarVeiculoPort: SalvarVeiculoPort
  ) {
    this.criar = this.criar.bind(this);
  }

  criar = async (usuarioId: number, veiculo: Veiculo) => {
    return this.salvarVeiculoPort.criar(usuarioId, veiculo);
  };
}
