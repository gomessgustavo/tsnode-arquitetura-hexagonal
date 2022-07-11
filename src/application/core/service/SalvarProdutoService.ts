import { inject, injectable } from "tsyringe";
import ProdutoMapper from "../../../adapters/inbound/mapper/ProdutoMapper";
import { ProdutoRequest } from "../../../adapters/inbound/request/ProdutoRequest";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { SalvarProdutoServicePort } from "../../ports/in/SalvarProdutoServicePort";
import SalvarProdutoPort from "../../ports/out/SalvarProdutoPort";
import { Erro } from "../domain/Erro";
import { Produto } from "../domain/Produto";

@injectable()
export class SalvarProdutoService implements SalvarProdutoServicePort {
  constructor(
    @inject("SalvarProdutoAdapter")
    private salvarProdutoPort: SalvarProdutoPort
  ) {
    this.criar = this.criar.bind(this);
  }

  criar = async (produto: ProdutoRequest): Promise<ProdutoResponse | Erro> => {
    try {
      const entity = ProdutoMapper.toEntity(produto);
      const result = await this.salvarProdutoPort.criar(entity);

      if (result instanceof Erro) {
        throw result;
      }

      return ProdutoMapper.toResponse(result);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao salvar produto", 400);
    }
  };
}
