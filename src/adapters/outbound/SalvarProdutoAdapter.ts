import { Erro } from "../../application/core/domain/Erro";
import { Produto } from "../../application/core/domain/Produto";
import SalvarProdutoPort from "../../application/ports/out/SalvarProdutoPort";
import ProdutoMapper from "../inbound/mapper/ProdutoMapper";
import ProdutoRepository from "./repository/ProdutoRepository";

export class SalvarProdutoAdapter implements SalvarProdutoPort {
  constructor() {
    this.criar = this.criar.bind(this);
  }
  criar = async (produto: Produto): Promise<Produto> => {
    try {
      return ProdutoRepository.salvar(produto);
    } catch (erro) {
      throw erro;
    }
  };
}
