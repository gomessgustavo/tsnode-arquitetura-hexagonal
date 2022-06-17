import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface SalvarProdutoPort {
  criar(produto: Produto): Promise<Produto | Erro>;
}

export default SalvarProdutoPort;
