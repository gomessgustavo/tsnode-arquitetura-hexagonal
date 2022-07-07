import { Produto } from "../../core/domain/Produto";

interface SalvarProdutoPort {
  criar(produto: Produto): Promise<Produto>;
}

export default SalvarProdutoPort;
