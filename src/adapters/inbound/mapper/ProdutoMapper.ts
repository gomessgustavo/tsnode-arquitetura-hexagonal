import ObjectMapper from "object-mapper";
import { CriarProdutoRequest } from "../request/CriarProdutoRequest";
import { Produto } from "../../../application/core/domain/Produto";

class ProdutoMapper {
  toEntity = (produto: CriarProdutoRequest) => {
    // const entidade = ObjectMapper.merge(produto, Produto);
  };
}
