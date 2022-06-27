import UsuarioEntity from "../../inbound/entity/UsuarioEntity";
import { Usuario } from "../../../application/core/domain/Usuario";

class UsuarioRepository {
  salvar = async (usuario: Usuario): Promise<UsuarioEntity> => {
    const [usuarioSalvo] = await UsuarioEntity.upsert({ ...usuario });
    return usuarioSalvo;
  };
}

export default new UsuarioRepository();
