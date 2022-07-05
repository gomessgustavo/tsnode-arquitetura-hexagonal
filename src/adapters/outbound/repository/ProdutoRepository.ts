import { Produto } from "../../../application/core/domain/Produto";
import ProdutoEntity from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  salvar = async (produto: Produto): Promise<ProdutoEntity> => {
    const [produtoSalvo] = await ProdutoEntity.upsert({ ...produto });
    return produtoSalvo;
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
