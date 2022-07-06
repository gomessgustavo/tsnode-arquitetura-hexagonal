import { VeiculoRequest } from "../../../adapters/inbound/request/VeiculoRequest";
import { VeiculoResponse } from "../../../adapters/inbound/response/VeiculoResponse";
import { Erro } from "../../core/domain/Erro";
import { Veiculo } from "../../core/domain/Veiculo";

interface SalvarVeiculoPort {
  criar(
    usuarioId: number,
    veiculo: VeiculoRequest
  ): Promise<VeiculoResponse | Erro>;
}

export default SalvarVeiculoPort;
