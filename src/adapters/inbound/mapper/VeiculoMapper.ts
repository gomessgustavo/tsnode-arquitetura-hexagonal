import { Veiculo } from "../../../application/core/domain/Veiculo";
import VeiculoEntity from "../entity/VeiculoEntity";
import { VeiculoRequest } from "../request/VeiculoRequest";
import { VeiculoResponse } from "../response/VeiculoResponse";

class VeiculoMapper {
  toEntity = (request: VeiculoRequest): Veiculo => {
    const veiculo = new Veiculo();

    veiculo.ano = request.ano;
    veiculo.modelo = request.modelo;
    veiculo.placa = request.placa;
    veiculo.placa = request.placa;

    return veiculo;
  };

  toResponseVeiculos = (entities: VeiculoEntity[]): VeiculoResponse[] => {
    return entities.map((veiculo) => this.toResponse(veiculo));
  };

  toResponse = (entity: VeiculoEntity): VeiculoResponse => {
    const response = new VeiculoResponse();

    response.id = entity.id;
    response.ano = entity.ano;
    response.modelo = entity.modelo;
    response.placa = entity.placa;
    response.quilometragem = entity.quilometragem;

    return response;
  };
}

export default new VeiculoMapper();
