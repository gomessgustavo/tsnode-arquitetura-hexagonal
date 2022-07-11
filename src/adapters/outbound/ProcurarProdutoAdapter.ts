import Produto from "../inbound/entity/ProdutoEntity";
import ProcurarProdutoPort from "../../application/ports/out/ProcurarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";
import { Erro } from "../../application/core/domain/Erro";

export class ProcurarProdutoAdapter implements ProcurarProdutoPort {
  constructor() {
    this.procurar = this.procurar.bind(this);
  }
  procurar = async (produtoId: number): Promise<Produto | Erro> => {
    try {
      const produto = await ProdutoRepository.porId(produtoId);
      if (produto) return produto;
      throw new Erro("Não foi encontrado produto com esse id", 404);
    } catch (erro) {
      throw erro;
    }
  };
}
