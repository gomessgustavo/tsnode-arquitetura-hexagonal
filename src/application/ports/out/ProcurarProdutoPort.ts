import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface ProcurarProdutoPort {
  procurar(produtoId: number): Promise<Produto | Erro>;
}

export default ProcurarProdutoPort;
