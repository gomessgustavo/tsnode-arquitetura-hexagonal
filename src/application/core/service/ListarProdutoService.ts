import ListarProdutoServicePort from "../../../application/ports/in/ListarProdutoServicePort";
import ListarProdutosPort from "../../../application/ports/out/ListarProdutosPort";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListarProdutoService implements ListarProdutoServicePort {
  constructor(
    @inject("ListarProdutoAdapter")
    private listarProdutoPort: ListarProdutosPort
  ) {
    this.listar = this.listar.bind(this);
  }

  listar = async () => {
    return this.listarProdutoPort.listar();
  };
}
