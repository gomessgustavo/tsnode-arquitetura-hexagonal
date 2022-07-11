import { Erro } from "../../application/core/domain/Erro";
import { Produto } from "../../application/core/domain/Produto";
import EditarProdutoPort from "../../application/ports/out/EditarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class EditarProdutoAdapter implements EditarProdutoPort {
  constructor() {
    this.editar = this.editar.bind(this);
  }
  editar = async (
    produtoId: number,
    produto: Produto
  ): Promise<Produto | Erro> => {
    try {
      const produtoEditado = {
        id: produtoId,
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco,
      };
      return await ProdutoRepository.salvar(produtoEditado);
    } catch (error) {
      throw error;
    }
  };
}
