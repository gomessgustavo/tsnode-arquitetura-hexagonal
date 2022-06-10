import { uuid } from "uuidv4";
import { Produto } from "../application/core/domain/Produto";
import SalvarProdutoPort from "../application/ports/out/SalvarProdutoPort";

export class Fake implements SalvarProdutoPort {
  private produtos: Produto[] = [];
  constructor() {
    this.criar = this.criar.bind(this);
  }

  criar = async (produto: Produto): Promise<Produto> => {
    const novoProduto = new Produto();
    Object.assign(novoProduto, {
      id: uuid(),
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
    });
    this.produtos.push(novoProduto);

    return novoProduto;
  };
}
