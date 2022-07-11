import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface ListarProdutosPort {
  listar(): Promise<Produto[] | Erro>;
}

export default ListarProdutosPort;
