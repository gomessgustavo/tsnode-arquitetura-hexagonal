import { Erro } from "../../application/core/domain/Erro";
import { Veiculo } from "../../application/core/domain/Veiculo";
import SalvarVeiculoPort from "../../application/ports/out/SalvarVeiculoPort";
import { VeiculoResponse } from "../inbound/response/VeiculoResponse";
import UsuarioRepository from "./repository/UsuarioRepository";
import VeiculoRepository from "./repository/VeiculoRepository";

export class SalvarVeiculoAdapter implements SalvarVeiculoPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (usuarioId: number, veiculo: Veiculo): Promise<Veiculo> => {
    try {
      veiculo.usuarioId = usuarioId;
      return await VeiculoRepository.salvar(veiculo);
    } catch (erro) {
      throw erro;
    }
  };
}
