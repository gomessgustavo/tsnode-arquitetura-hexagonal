import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface ListarProdutosPort {
  listar(): Promise<Array<Produto> | Erro>;
}

export default ListarProdutosPort;
