import { Produto } from "../../application/core/domain/Produto";
import ProdutoRepository from "./repository/ProdutoRepository";
import { LoginPort } from "../../application/ports/out/LoginPort";
import { Usuario } from "../../application/core/domain/Usuario";
import UsuarioRepository from "./repository/UsuarioRepository";
import { Erro } from "../../application/core/domain/Erro";

export class LoginAdapter implements LoginPort {
  constructor() {
    this.logar = this.logar.bind(this);
  }
  logar = async (apelido: string): Promise<Usuario> => {
    try {
      const usuario = await UsuarioRepository.porApelido(apelido);
      if (usuario) return usuario;
      throw new Erro("Não foi encontrado usuário com esse apelido", 404);
    } catch (erro) {
      throw erro;
    }
  };
}
