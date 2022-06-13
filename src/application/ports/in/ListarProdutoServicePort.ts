import { Produto } from "../../core/domain/Produto";

interface ListarProdutoServicePort {
  listar(): Promise<Array<Produto>>;
}

export default ListarProdutoServicePort;
