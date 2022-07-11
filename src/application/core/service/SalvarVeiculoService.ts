import { inject, injectable } from "tsyringe";
import VeiculoMapper from "../../../adapters/inbound/mapper/VeiculoMapper";
import UsuarioRepository from "../../../adapters/outbound/repository/UsuarioRepository";
import { SalvarVeiculoServicePort } from "../../ports/in/SalvarVeiculoServicePort";
import SalvarVeiculoPort from "../../ports/out/SalvarVeiculoPort";
import { Erro } from "../domain/Erro";
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
    try {
      if (!UsuarioRepository.porId(usuarioId)) {
        throw new Erro("Não foi encontrado usuário com esse id", 404);
      }

      const veiculoCriado = await this.salvarVeiculoPort.criar(
        usuarioId,
        veiculo
      );
      return VeiculoMapper.toResponse(veiculoCriado);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao salvar veículo", 400);
    }
  };
}
