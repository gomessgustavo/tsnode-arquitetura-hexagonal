import { inject, injectable } from "tsyringe";
import { EditarProdutoServicePort } from "../../ports/in/EditarProdutoServicePort";
import EditarProdutoPort from "../../ports/out/EditarProdutoPort";
import { Erro } from "../domain/Erro";
import { Produto } from "../domain/Produto";

@injectable()
export class EditarProdutoService implements EditarProdutoServicePort {
  constructor(
    @inject("EditarProdutoAdapter")
    private editarProdutoPort: EditarProdutoPort
  ) {
    this.editar = this.editar.bind(this);
  }

  editar(produtoId: number, produto: Produto): Promise<Produto | Erro> {
    return this.editarProdutoPort.editar(produtoId, produto);
  }
}
