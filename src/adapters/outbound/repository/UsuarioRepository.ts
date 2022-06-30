import UsuarioEntity from "../../inbound/entity/UsuarioEntity";
import { Usuario } from "../../../application/core/domain/Usuario";
import { getRepository, Repository } from "typeorm";

class UsuarioRepository {
  // private repository: Repository<UsuarioEntity>;

  constructor() {
    // this.repository = getRepository(UsuarioEntity);
  }
  salvar = async (usuario: Usuario): Promise<UsuarioEntity> => {
    // const usuarioSalvo = this.repository.save({ ...usuario });
    return new UsuarioEntity();
  };
}

export default new UsuarioRepository();
