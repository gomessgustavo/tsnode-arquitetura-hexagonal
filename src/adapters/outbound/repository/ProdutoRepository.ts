import { Produto } from "../../../application/core/domain/Produto";
import ProdutoEntity from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  salvar = (produto: Produto): Promise<ProdutoEntity> => {
    const { id, nome, descricao, preco } = produto;
    return ProdutoEntity.create({ id, nome, descricao, preco });
  };
}

export default new ProdutoRepository();