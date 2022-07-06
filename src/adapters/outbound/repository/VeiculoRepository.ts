import { Repository } from "sequelize-typescript";
import { Veiculo } from "../../../application/core/domain/Veiculo";
import database from "../../../database";
import VeiculoEntity from "../../inbound/entity/VeiculoEntity";

class VeiculoRepository {
  private repository: Repository<VeiculoEntity>;

  constructor() {
    this.repository = database.connection.getRepository(VeiculoEntity);
  }

  salvar = async (veiculo: Veiculo) => {
    const [veiculoSalvo] = await this.repository.upsert({ ...veiculo });
    return veiculoSalvo;
  };
}

export default new VeiculoRepository();
