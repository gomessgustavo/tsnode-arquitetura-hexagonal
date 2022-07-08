import { inject, injectable } from "tsyringe";
import VeiculoMapper from "../../../adapters/inbound/mapper/VeiculoMapper";
import UsuarioRepository from "../../../adapters/outbound/repository/UsuarioRepository";
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
    if (!UsuarioRepository.porId(usuarioId)) {
      throw Error("Não foi encontrado usuário com esse id");
    }

    const veiculoCriado = await this.salvarVeiculoPort.criar(
      usuarioId,
      veiculo
    );
    return VeiculoMapper.toResponse(veiculoCriado);
  };
}
