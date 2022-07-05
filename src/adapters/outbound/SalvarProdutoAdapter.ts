import { Erro } from "../../application/core/domain/Erro";
import { Produto } from "../../application/core/domain/Produto";
import SalvarProdutoPort from "../../application/ports/out/SalvarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";

export class SalvarProdutoAdapter implements SalvarProdutoPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (produto: Produto): Promise<Produto | Erro> => {
    try {
      return ProdutoRepository.salvar(produto);
    } catch (erro) {
      console.log(erro);
      return {
        mensagem: "Não foi possível criar um produto novo",
        status: 400,
      };
    }
  };
}
