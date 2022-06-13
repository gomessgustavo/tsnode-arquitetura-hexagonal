import { inject, injectable } from "tsyringe";
import DeletarProdutoServicePort from "../../ports/in/DeletarProdutoServicePort";
import DeletarProdutoPort from "../../ports/out/DeletarProdutoPort";

@injectable()
export class DeletarProdutoService implements DeletarProdutoServicePort {
  constructor(
    @inject("DeletarProdutoAdapter")
    private deletarProdutoPort: DeletarProdutoPort
  ) {
    this.deletar = this.deletar.bind(this);
  }

  deletar = async (produtoId: number) => {
    return this.deletarProdutoPort.deletar(produtoId);
  };
}
