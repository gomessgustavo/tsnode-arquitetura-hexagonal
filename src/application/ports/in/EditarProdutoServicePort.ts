import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

export interface EditarProdutoServicePort {
  editar(produtoId: number, produto: Produto): Promise<Produto | Erro>;
}
