import ListarProdutosPort from "application/ports/out/ListarProdutosPort";
import { Produto } from "../../application/core/domain/Produto";

export class FakeListarProduto implements ListarProdutosPort {
  private produtos: Produto[] = [];
  constructor() {
    this.listar = this.listar.bind(this);
  }

  listar = async (): Promise<Array<Produto>> => {
    return this.produtos;
  };
}
