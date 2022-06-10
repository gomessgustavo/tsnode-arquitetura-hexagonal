import { Produto } from "../../application/core/domain/Produto";
import ProdutoEntity from "../../adapters/inbound/entity/ProdutoEntity";
import SalvarProdutoPort from "../../application/ports/out/SalvarProdutoPort";

export class SalvarProdutoAdapter implements SalvarProdutoPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (produto: Produto): Promise<Produto> => {
    try {
      const { nome, descricao, preco } = produto;
      const produtoNovo = await ProdutoEntity.create({
        nome,
        descricao,
        preco,
      });
      return { id: produtoNovo.id, nome, descricao, preco };
    } catch (error) {
      throw error;
    }
  };
}
