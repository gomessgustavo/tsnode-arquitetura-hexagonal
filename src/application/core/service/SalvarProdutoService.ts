import { inject, injectable } from "tsyringe";
import { SalvarProdutoServicePort } from "../../ports/in/SalvarProdutoServicePort";
import SalvarProdutoPort from "../../ports/out/SalvarProdutoPort";
import { Produto } from "../domain/Produto";

@injectable()
export class SalvarProdutoService implements SalvarProdutoServicePort {
  constructor(
    @inject("SalvarProdutoAdapter")
    private salvarProdutoPort: SalvarProdutoPort
  ) {
    this.criar = this.criar.bind(this);
  }

  criar = async (produto: Produto) => {
    console.log(produto);
    return this.salvarProdutoPort.criar(produto);
  };
}
