import { EditarProdutoServicePort } from "application/ports/in/EditarProdutoServicePort";
import EditarProdutoPort from "application/ports/out/EditarProdutoPort";
import { inject, injectable } from "tsyringe";
import { Produto } from "../domain/Produto";

@injectable()
export class EditarProdutoService implements EditarProdutoServicePort {
  constructor(
    @inject("EditarProdutoAdapter")
    private editarProdutoPort: EditarProdutoPort
  ) {
    this.editar = this.editar.bind(this);
  }

  editar(produtoId: number, produto: Produto): Promise<Produto> {
    return this.editarProdutoPort.editar(produtoId, produto);
  }
}
