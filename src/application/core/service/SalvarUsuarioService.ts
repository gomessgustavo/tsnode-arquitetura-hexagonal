import { inject, injectable } from "tsyringe";
import { SalvarUsuarioServicePort } from "../../ports/in/SalvarUsuarioServicePort";
import BuscarCepPort from "../../ports/out/BuscarCepPort";
import SalvarUsuarioPort from "../../ports/out/SalvarUsuarioPort";
import { Usuario } from "../domain/Usuario";
import ObjectMapper from "object-mapper";

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

  criar = async (usuario: Usuario) => {
    const somenteNumerosCep = usuario.cep.replace(/\D/g, "");
    const endereco = await this.buscarCepPort.buscar(somenteNumerosCep);

    usuario.bairro = endereco.bairro;
    usuario.complemento = endereco.complemento;
    usuario.localidade = endereco.localidade;
    usuario.logradouro = endereco.logradouro;
    usuario.uf = endereco.uf;

    return this.salvarUsuarioPort.criar(usuario);
  };
}
