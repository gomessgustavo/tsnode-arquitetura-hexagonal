import { ProdutoRequest } from "../../../adapters/inbound/request/ProdutoRequest";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { Erro } from "../../core/domain/Erro";

interface SalvarProdutoPort {
  criar(produto: ProdutoRequest): Promise<ProdutoResponse | Erro>;
}

export default SalvarProdutoPort;
