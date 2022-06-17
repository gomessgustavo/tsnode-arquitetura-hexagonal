import ProcurarProdutoPort from "../../application/ports/out/ProcurarProdutoPort";
import { Produto } from "../../application/core/domain/Produto";
import { Erro } from "../../application/core/domain/Erro";

export class FakeBuscarProduto implements ProcurarProdutoPort {
  private produtos: Produto[] = [
    { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
  ];
  constructor() {
    this.procurar = this.procurar.bind(this);
  }

  procurar = async (produtoId: number): Promise<Produto | Erro> => {
    const produto = this.produtos.find(({ id }) => id === produtoId);
    if (produto) return produto;
    return {
      mensagem: "Não foi encontrado nenhum produto com o id",
      status: 404,
    };
  };
}
