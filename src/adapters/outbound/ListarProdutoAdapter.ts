import ListarProdutosPort from "application/ports/out/ListarProdutosPort";
import { Produto } from "../../application/core/domain/Produto";
import ProdutoRepository from "./repository/ProdutoRepository";

export class ListarProdutoAdapter implements ListarProdutosPort {
  constructor() {
    this.listar = this.listar.bind(this);
  }
  listar = async (): Promise<Array<Produto>> => {
    try {
      const produtos = await ProdutoRepository.listar();
      return produtos.map((produto) => {
        return {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          preco: produto.preco,
        };
      });
    } catch (error) {
      throw error;
    }
  };
}
