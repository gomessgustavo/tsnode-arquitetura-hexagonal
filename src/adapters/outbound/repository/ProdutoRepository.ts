import { DeleteResult, getRepository, Repository } from "typeorm";
import { Produto } from "../../../application/core/domain/Produto";
import ProdutoEntity from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  private repository: Repository<Produto>;

  constructor() {
    this.repository = getRepository(Produto);
  }

  salvar = async (produto: Produto): Promise<ProdutoEntity> => {
    const produtoSalvo = this.repository.create({ ...produto });
    return produtoSalvo;
  };

  listar = (): Promise<Array<ProdutoEntity>> => {
    return this.repository.find();
  };

  porId = (produtoId: number): Promise<ProdutoEntity | undefined> => {
    return this.repository.findOne(produtoId);
  };

  deletar = (produtoId: number): Promise<DeleteResult> => {
    return this.repository.delete({ id: produtoId });
  };
}

export default new ProdutoRepository();
