import { Produto } from "../../../application/core/domain/Produto";
import { Erro } from "../../core/domain/Erro";

interface ProcurarProdutoServicePort {
  procurar(produtoId: number): Promise<Produto | Erro>;
}

export default ProcurarProdutoServicePort;
