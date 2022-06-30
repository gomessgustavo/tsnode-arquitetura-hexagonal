import { getRepository, Repository } from "typeorm";
import Produto from "../../inbound/entity/ProdutoEntity";

class ProdutoRepository {
  private repository: Repository<Produto>;
  constructor() {
    this.repository = getRepository(Produto);
  }

  public async create(produto: Produto): Promise<Produto> {
    const newProduto = this.repository.create(produto);
    await this.repository.save(newProduto);
    return newProduto;
  }
}

export default new ProdutoRepository();
