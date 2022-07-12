import { inject, injectable } from "tsyringe";
import { Erro } from "../domain/Erro";
import { LoginServicePort } from "../../ports/in/LoginServicePort";
import { LoginPort } from "../../ports/out/LoginPort";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import secret from "../../security/secret.json";
import { TokenResponse } from "../../../adapters/inbound/response/TokenResponse";

const TEMPO_DE_EXPIRACAO = "2h";

@injectable()
export class LoginService implements LoginServicePort {
  constructor(
    @inject("LoginAdapter")
    private loginPort: LoginPort
  ) {
    this.logar = this.logar.bind(this);
  }

  logar = async (
    apelido: string,
    senha: string
  ): Promise<TokenResponse | Erro> => {
    try {
      const usuario = await this.loginPort.logar(apelido);

      if (usuario instanceof Erro) {
        throw usuario;
      }
      const senhaComparada = await compare(senha, usuario.senha);

      if (senhaComparada) {
        const jwt = sign({ ...usuario }, secret.chave, {
          expiresIn: TEMPO_DE_EXPIRACAO,
        });

        const token = new TokenResponse(jwt);
        return token;
      }

      throw new Erro("Credenciais inválidas", 404);
    } catch (erro) {
      console.log(erro);
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao logar", 400);
    }
  };
}
