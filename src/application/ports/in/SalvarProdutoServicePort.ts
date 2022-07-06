import { ProdutoRequest } from "../../../adapters/inbound/request/ProdutoRequest";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { Erro } from "../../core/domain/Erro";

export interface SalvarProdutoServicePort {
  criar(produto: ProdutoRequest): Promise<ProdutoResponse | Erro>;
}
