import { Produto } from "../../../application/core/domain/Produto";
import ProdutoEntity from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  salvar = (produto: Produto): Promise<ProdutoEntity> => {
    const { id, nome, descricao, preco } = produto;
    return ProdutoEntity.create({ id, nome, descricao, preco });
  };

  listar = (): Promise<Array<ProdutoEntity>> => {
    return ProdutoEntity.findAll();
  };

  porId = (produtoId: number): Promise<ProdutoEntity | null> => {
    return ProdutoEntity.findByPk(produtoId);
  };

  deletar = (produtoId: number): Promise<number> => {
    return ProdutoEntity.destroy({ where: { id: produtoId } });
  };
}

export default new ProdutoRepository();
