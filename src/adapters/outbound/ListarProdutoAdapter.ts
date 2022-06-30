import ListarProdutosPort from "../../application/ports/out/ListarProdutosPort";
import { Produto } from "../../application/core/domain/Produto";
import ProdutoRepository from "./repository/ProdutoRepository";
import { Erro } from "../../application/core/domain/Erro";

export class ListarProdutoAdapter implements ListarProdutosPort {
  constructor() {
    this.listar = this.listar.bind(this);
  }
  listar = async (): Promise<Array<Produto> | Erro> => {
    try {
      const produtos = await ProdutoRepository.find();
      return produtos.map((produto) => {
        return {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          preco: produto.preco,
        };
      });
    } catch (erro) {
      console.log(erro);
      return {
        mensagem: "Não foi possível listar os produtos",
        status: 400,
      };
    }
  };
}
