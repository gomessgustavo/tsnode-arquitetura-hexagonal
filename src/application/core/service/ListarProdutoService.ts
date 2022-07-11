import ListarProdutoServicePort from "../../../application/ports/in/ListarProdutoServicePort";
import ListarProdutosPort from "../../../application/ports/out/ListarProdutosPort";
import { inject, injectable } from "tsyringe";
import ProdutoMapper from "../../../adapters/inbound/mapper/ProdutoMapper";
import { Erro } from "../domain/Erro";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";

@injectable()
export class ListarProdutoService implements ListarProdutoServicePort {
  constructor(
    @inject("ListarProdutoAdapter")
    private listarProdutoPort: ListarProdutosPort
  ) {
    this.listar = this.listar.bind(this);
  }

  listar = async (): Promise<ProdutoResponse[] | Erro> => {
    try {
      const produtos = await this.listarProdutoPort.listar();
      if (produtos instanceof Erro) {
        throw produtos;
      }

      return ProdutoMapper.toProdutosResponse(produtos);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao listar os produtos", 400);
    }
  };
}
