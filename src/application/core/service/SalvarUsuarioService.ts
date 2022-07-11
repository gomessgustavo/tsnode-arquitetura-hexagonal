import { inject, injectable } from "tsyringe";
import { SalvarUsuarioServicePort } from "../../ports/in/SalvarUsuarioServicePort";
import BuscarCepPort from "../../ports/out/BuscarCepPort";
import SalvarUsuarioPort from "../../ports/out/SalvarUsuarioPort";
import { Erro } from "../domain/Erro";
import { genSaltSync, hashSync } from "bcrypt";
import { UsuarioResponse } from "../../../adapters/inbound/response/UsuarioResponse";
import { UsuarioRequest } from "../../../adapters/inbound/request/UsuarioRequest";
import UsuarioMapper from "../../../adapters/inbound/mapper/UsuarioMapper";
const SALT_ROUND = 10;
@injectable()
export class SalvarUsuarioService implements SalvarUsuarioServicePort {
  constructor(
    @inject("SalvarUsuarioAdapter")
    private salvarUsuarioPort: SalvarUsuarioPort,

    @inject("BuscarCepAdapter")
    private buscarCepPort: BuscarCepPort
  ) {
    this.criar = this.criar.bind(this);
  }

  private hash = (senha: string) => {
    const salt = genSaltSync(SALT_ROUND);
    return hashSync(senha, salt);
  };

  criar = async (request: UsuarioRequest): Promise<UsuarioResponse | Erro> => {
    try {
      const somenteNumerosCep = request.cep.replace(/\D/g, "");
      const endereco = await this.buscarCepPort.buscar(somenteNumerosCep);

      const usuario = UsuarioMapper.toEntity(request);
      usuario.bairro = endereco.bairro;
      usuario.complemento = endereco.complemento;
      usuario.localidade = endereco.localidade;
      usuario.logradouro = endereco.logradouro;
      usuario.uf = endereco.uf;
      usuario.senha = this.hash(usuario.senha);

      const response = await this.salvarUsuarioPort.criar(usuario);
      if (response instanceof Erro) {
        throw response;
      }

      response.veiculos = [];
      return UsuarioMapper.toResponse(response);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao salvar usuário", 400);
    }
  };
}
