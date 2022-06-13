import EditarProdutoPort from "application/ports/out/EditarProdutoPort";
import { Produto } from "../../application/core/domain/Produto";
import ProdutoRepository from "./repository/ProdutoRepository";

export class EditarProdutoAdapter implements EditarProdutoPort {
  constructor() {
    this.editar = this.editar.bind(this);
  }
  editar = async (produtoId: number, produto: Produto): Promise<Produto> => {
    try {
      const produtoPorId = await ProdutoRepository.porId(produtoId);
      if (!produtoPorId) throw new Error();

      const produtoEditado = {
        id: produtoId,
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco,
      };
      const produtoNovo = await ProdutoRepository.salvar(produtoEditado);
      return {
        id: produtoNovo.id,
        nome: produtoNovo.nome,
        descricao: produtoNovo.descricao,
        preco: produtoNovo.preco,
      };
    } catch (error) {
      throw error;
    }
  };
}
