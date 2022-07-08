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
    const usuarioSalvo = await this.repository.create({ ...usuario });
    return usuarioSalvo;
  };

  porId = async (usuarioId: number): Promise<UsuarioEntity | null> => {
    const { VeiculoEntity } = database.connection.models;
    const usuario = await this.repository.findByPk(usuarioId, {
      include: [VeiculoEntity],
      attributes: {
        exclude: ["senha"],
      },
    });
    return usuario;
  };
}

export default new UsuarioRepository();
