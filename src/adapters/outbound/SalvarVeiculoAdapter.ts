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
  criar = async (
    usuarioId: number,
    veiculo: Veiculo
  ): Promise<VeiculoResponse | Erro> => {
    try {
      const usuarioPorId = await UsuarioRepository.porId(usuarioId);
      if (!usuarioPorId) {
        return { mensagem: "Não foi encontrado nenhum usuário", status: 404 };
      }

      veiculo.usuarioId = usuarioId;

      return await VeiculoRepository.salvar(veiculo);
    } catch (erro) {
      return {
        mensagem: "Não foi possível criar um veiculo",
        status: 400,
      };
    }
  };
}
