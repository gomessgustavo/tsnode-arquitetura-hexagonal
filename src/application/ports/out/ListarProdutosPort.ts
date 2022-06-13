import { Produto } from "../../core/domain/Produto";

interface ListarProdutosPort {
  listar(): Promise<Array<Produto>>;
}

export default ListarProdutosPort;
