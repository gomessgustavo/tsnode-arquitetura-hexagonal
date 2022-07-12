import UsuarioEntity from "../../inbound/entity/UsuarioEntity";
import { Usuario } from "../../../application/core/domain/Usuario";
import { Repository } from "sequelize-typescript";
import database from "../../../database";

class UsuarioRepository {
  private repository: Repository<UsuarioEntity>;

  constructor() {
    this.repository = database.connection.getRepository(UsuarioEntity);
  }

  salvar = async (usuario: Usuario): Promise<UsuarioEntity> => {
    return await this.repository.create({ ...usuario });
  };

  porId = async (usuarioId: number): Promise<UsuarioEntity | null> => {
    const { VeiculoEntity } = database.connection.models;
    return await this.repository.findByPk(usuarioId, {
      include: [VeiculoEntity],
      attributes: {
        exclude: ["senha"],
      },
    });
  };

  porApelido = async (apelido: string): Promise<UsuarioEntity | null> => {
    return await this.repository.findOne({
      where: {
        apelido,
      },
    });
  };
}

export default new UsuarioRepository();
