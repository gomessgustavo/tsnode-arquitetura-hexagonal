import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

export interface SalvarProdutoServicePort {
  criar(produto: Produto): Promise<Produto | Erro>;
}
