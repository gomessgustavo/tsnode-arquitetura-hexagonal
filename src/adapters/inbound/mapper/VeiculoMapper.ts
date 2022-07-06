import { Veiculo } from "../../../application/core/domain/Veiculo";
import { VeiculoRequest } from "../request/VeiculoRequest";

class VeiculoMapper {
  toEntity = (request: VeiculoRequest): Veiculo => {
    const usuario = new Veiculo();
    return Object.assign(usuario, request);
  };
}

export default new VeiculoMapper();
