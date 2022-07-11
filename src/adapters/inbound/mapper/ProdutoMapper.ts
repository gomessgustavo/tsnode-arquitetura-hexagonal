import { ProdutoRequest } from "../request/ProdutoRequest";
import { Produto } from "../../../application/core/domain/Produto";
import { ProdutoResponse } from "../response/ProdutoResponse";

class ProdutoMapper {
  toEntity = (produto: ProdutoRequest): Produto => {
    const produtoNovo = new Produto();
    return Object.assign(produtoNovo, produto);
  };

  toResponse = (produto: Produto): ProdutoResponse => {
    const response = new ProdutoResponse();

    response.nome = produto.nome;
    response.descricao = produto.descricao;
    response.preco = produto.preco;

    return response;
  };

  toProdutosResponse = (produtos: Produto[]): ProdutoResponse[] => {
    return produtos.map((produto) => this.toResponse(produto));
  };
}

export default new ProdutoMapper();
