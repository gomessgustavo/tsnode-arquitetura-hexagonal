import { ProdutoRequest } from "../../../adapters/inbound/request/ProdutoRequest";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { Erro } from "../../core/domain/Erro";

export interface EditarProdutoServicePort {
  editar(
    produtoId: number,
    produto: ProdutoRequest
  ): Promise<ProdutoResponse | Erro>;
}
