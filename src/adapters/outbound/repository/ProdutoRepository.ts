import { Repository } from "sequelize-typescript";
import { Produto } from "../../../application/core/domain/Produto";
import database from "../../../database";
import ProdutoEntity from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  private repository: Repository<ProdutoEntity>;

  constructor() {
    this.repository = database.connection.getRepository(ProdutoEntity);
  }

  salvar = async (produto: Produto): Promise<ProdutoEntity> => {
    const [produtoSalvo] = await this.repository.upsert({ ...produto });
    return produtoSalvo;
  };

  listar = (): Promise<Array<ProdutoEntity>> => {
    return this.repository.findAll();
  };

  porId = (produtoId: number): Promise<ProdutoEntity | null> => {
    return this.repository.findByPk(produtoId);
  };

  deletar = (produtoId: number): Promise<number> => {
    return this.repository.destroy({ where: { id: produtoId } });
  };
}

export default new ProdutoRepository();
