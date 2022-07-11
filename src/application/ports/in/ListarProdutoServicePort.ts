import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import { Erro } from "../../core/domain/Erro";

interface ListarProdutoServicePort {
  listar(): Promise<ProdutoResponse[] | Erro>;
}

export default ListarProdutoServicePort;
