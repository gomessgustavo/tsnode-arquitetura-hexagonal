import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface ListarProdutoServicePort {
  listar(): Promise<Array<Produto> | Erro>;
}

export default ListarProdutoServicePort;
