import DeletarProdutoPort from "../../application/ports/out/DeletarProdutoPort";
import { Produto } from "../../application/core/domain/Produto";

export class FakeDeletarProduto implements DeletarProdutoPort {
  private produtos: Produto[] = [
    { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
  ];
  constructor() {
    this.deletar = this.deletar.bind(this);
  }

  deletar = async (produtoId: number): Promise<number> => {
    const temProduto = this.produtos.some(({ id }) => id === produtoId);

    if (temProduto) {
      this.produtos = this.produtos.filter(
        (produto) => produto.id !== produtoId
      );
      return produtoId;
    } else {
      return 0;
    }
  };
}
