import { Erro } from "../../application/core/domain/Erro";
import { Produto } from "../../application/core/domain/Produto";
import EditarProdutoPort from "../../application/ports/out/EditarProdutoPort";

export class FakeEditarProduto implements EditarProdutoPort {
  private produtos: Produto[] = [
    { id: 1, nome: "Caneta", descricao: "Caneta da marca bic", preco: 0.25 },
  ];
  constructor() {
    this.editar = this.editar.bind(this);
  }

  editar = async (
    produtoId: number,
    produto: Produto
  ): Promise<Produto | Erro> => {
    const produtoProcurado = this.produtos.find(({ id }) => id === produtoId);

    if (produtoProcurado) {
      produtoProcurado.descricao = produto.descricao;
      produtoProcurado.nome = produto.nome;
      produtoProcurado.preco = produto.preco;

      return produtoProcurado;
    }

    return {
      mensagem: "Não foi encontrado nenhum produto",
      status: 404,
    };
  };
}
