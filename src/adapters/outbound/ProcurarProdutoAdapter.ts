import Produto from "../inbound/entity/ProdutoEntity";
import ProcurarProdutoPort from "../../application/ports/out/ProcurarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class ProcurarProdutoAdapter implements ProcurarProdutoPort {
  constructor() {
    this.procurar = this.procurar.bind(this);
  }
  procurar = async (produtoId: number): Promise<Produto | null> => {
    try {
      return await ProdutoRepository.porId(produtoId);
    } catch (error) {
      throw error;
    }
  };
}
