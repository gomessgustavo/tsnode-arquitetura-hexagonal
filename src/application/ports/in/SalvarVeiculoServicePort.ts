import { VeiculoRequest } from "../../../adapters/inbound/request/VeiculoRequest";
import { VeiculoResponse } from "../../../adapters/inbound/response/VeiculoResponse";
import { Erro } from "../../core/domain/Erro";

export interface SalvarVeiculoServicePort {
  criar(
    usuarioId: number,
    veiculo: VeiculoRequest
  ): Promise<VeiculoResponse | Erro>;
}
