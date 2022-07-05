import Produto from "../inbound/entity/ProdutoEntity";
import ProcurarProdutoPort from "../../application/ports/out/ProcurarProdutoPort";
import ProdutoRepository from "./repository/ProdutoRepository";
import { Erro } from "../../application/core/domain/Erro";

export class ProcurarProdutoAdapter implements ProcurarProdutoPort {
  constructor() {
    this.procurar = this.procurar.bind(this);
  }
  procurar = async (produtoId: number): Promise<Produto | Erro> => {
    try {
      const produto = await ProdutoRepository.porId(produtoId);
      if (produto) return produto;
      return {
        mensagem: "Não foi encontrado nenhum produto com o id",
        status: 404,
      };
    } catch (erro) {
      return {
        mensagem: "Não foi possível listar os produtos",
        status: 400,
      };
    }
  };
}
