import { Produto } from "../../../application/core/domain/Produto";

interface ProcurarProdutoServicePort {
  procurar(produtoId: number): Promise<Produto | null>;
}

export default ProcurarProdutoServicePort;
