import { CriarProdutoRequest } from "../request/CriarProdutoRequest";
import { Produto } from "../../../application/core/domain/Produto";
import { ObjectMapper } from "json-object-mapper";

class ProdutoMapper {
  toEntity = (produto: CriarProdutoRequest): Produto => {
    const produtoNovo = new Produto();
    return Object.assign(produtoNovo, produto);
  };
}

export default new ProdutoMapper();
