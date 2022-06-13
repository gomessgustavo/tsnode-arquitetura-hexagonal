import DeletarProdutoPort from "../../application/ports/out/DeletarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class DeletarProdutoAdapter implements DeletarProdutoPort {
  constructor() {
    this.deletar = this.deletar.bind(this);
  }
  deletar = async (produtoId: number): Promise<number> => {
    try {
      return await ProdutoRepository.deletar(produtoId);
    } catch (error) {
      throw error;
    }
  };
}
