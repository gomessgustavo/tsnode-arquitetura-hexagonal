import ProcurarProdutoPort from "../../application/ports/out/ProcurarProdutoPort";
import { Produto } from "../../application/core/domain/Produto";

export class FakeBuscarProduto implements ProcurarProdutoPort {
  private produtos: Produto[] = [
    { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
  ];
  constructor() {
    this.procurar = this.procurar.bind(this);
  }

  procurar = async (produtoId: number): Promise<Produto | null> => {
    const produto = this.produtos.find(({ id }) => id === produtoId);
    return produto || null;
  };
}
