import ProcurarProdutoServicePort from "../../ports/in/ProcurarProdutoServicePort";
import { inject, injectable } from "tsyringe";
import ProcurarProdutoPort from "../../ports/out/ProcurarProdutoPort";
import { Erro } from "../domain/Erro";
import ProdutoMapper from "../../../adapters/inbound/mapper/ProdutoMapper";

@injectable()
export class ProcurarProdutoService implements ProcurarProdutoServicePort {
  constructor(
    @inject("ProcurarProdutoAdapter")
    private procurarProdutoPort: ProcurarProdutoPort
  ) {
    this.procurar = this.procurar.bind(this);
  }

  procurar = async (produtoId: number) => {
    try {
      const produto = await this.procurarProdutoPort.procurar(produtoId);
      if (produto instanceof Erro) {
        throw produto;
      }

      return ProdutoMapper.toResponse(produto);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao listar os produtos", 400);
    }
  };
}
