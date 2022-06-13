import { Produto } from "../../core/domain/Produto";

interface ProcurarProdutoPort {
  procurar(produtoId: number): Promise<Produto | null>;
}

export default ProcurarProdutoPort;
