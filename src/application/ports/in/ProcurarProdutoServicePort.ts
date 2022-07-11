import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { Erro } from "../../core/domain/Erro";

interface ProcurarProdutoServicePort {
  procurar(produtoId: number): Promise<ProdutoResponse | Erro>;
}

export default ProcurarProdutoServicePort;
