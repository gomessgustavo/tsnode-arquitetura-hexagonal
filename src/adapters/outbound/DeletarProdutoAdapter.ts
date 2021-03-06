import { Erro } from "../../application/core/domain/Erro";
import DeletarProdutoPort from "../../application/ports/out/DeletarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class DeletarProdutoAdapter implements DeletarProdutoPort {
  constructor() {
    this.deletar = this.deletar.bind(this);
  }
  deletar = async (produtoId: number): Promise<number | Erro> => {
    try {
      return await ProdutoRepository.deletar(produtoId);
    } catch (erro) {
      throw erro;
    }
  };
}
