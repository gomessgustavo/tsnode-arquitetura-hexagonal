import { Erro } from "../../core/domain/Erro";
import { Veiculo } from "../../core/domain/Veiculo";

export interface SalvarVeiculoServicePort {
  criar(usuarioId: number, veiculo: Veiculo): Promise<Veiculo | Erro>;
}
