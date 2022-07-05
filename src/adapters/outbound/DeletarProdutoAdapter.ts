import { Erro } from "../../application/core/domain/Erro";
import DeletarProdutoPort from "../../application/ports/out/DeletarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class DeletarProdutoAdapter implements DeletarProdutoPort {
  constructor() {
    this.deletar = this.deletar.bind(this);
  }
  deletar = async (produtoId: number): Promise<Number | Erro> => {
    try {
      return await ProdutoRepository.deletar(produtoId);
    } catch (erro) {
      return {
        mensagem: "Não foi possível deletar o produto",
        status: 404,
      };
    }
  };
}
