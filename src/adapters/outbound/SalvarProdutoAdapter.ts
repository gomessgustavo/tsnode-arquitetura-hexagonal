import { Produto } from "../../application/core/domain/Produto";
import SalvarProdutoPort from "../../application/ports/out/SalvarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class SalvarProdutoAdapter implements SalvarProdutoPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (produto: Produto): Promise<Produto> => {
    try {
      const produtoNovo = await ProdutoRepository.salvar(produto);
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
