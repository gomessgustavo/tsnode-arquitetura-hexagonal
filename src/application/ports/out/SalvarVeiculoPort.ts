import { Erro } from "../../core/domain/Erro";
import { Veiculo } from "../../core/domain/Veiculo";

interface SalvarVeiculoPort {
  criar(usuarioId: number, veiculo: Veiculo): Promise<Veiculo>;
}

export default SalvarVeiculoPort;
