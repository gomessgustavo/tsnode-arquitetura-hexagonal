import ListarProdutosPort from "../../application/ports/out/ListarProdutosPort";
import { Produto } from "../../application/core/domain/Produto";
import ProdutoRepository from "./repository/ProdutoRepository";
import { Erro } from "../../application/core/domain/Erro";

export class ListarProdutoAdapter implements ListarProdutosPort {
  constructor() {
    this.listar = this.listar.bind(this);
  }
  listar = async (): Promise<Produto[]> => {
    try {
      const produtos = await ProdutoRepository.listar();
      return produtos;
    } catch (erro) {
      throw erro;
    }
  };
}
