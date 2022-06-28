import { ProdutoRequest } from "../request/ProdutoRequest";
import { Produto } from "../../../application/core/domain/Produto";

class ProdutoMapper {
  toEntity = (produto: ProdutoRequest): Produto => {
    const produtoNovo = new Produto();
    return Object.assign(produtoNovo, produto);
  };
}

export default new ProdutoMapper();
