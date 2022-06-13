import ProcurarProdutoServicePort from "../../ports/in/ProcurarProdutoServicePort";
import { inject, injectable } from "tsyringe";
import ProcurarProdutoPort from "../../ports/out/ProcurarProdutoPort";

@injectable()
export class ProcurarProdutoService implements ProcurarProdutoServicePort {
  constructor(
    @inject("ProcurarProdutoAdapter")
    private procurarProdutoPort: ProcurarProdutoPort
  ) {
    this.procurar = this.procurar.bind(this);
  }

  procurar = async (produtoId: number) => {
    return this.procurarProdutoPort.procurar(produtoId);
  };
}
