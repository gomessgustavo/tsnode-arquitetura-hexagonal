import { Produto } from "../../core/domain/Produto";

interface EditarProdutoPort {
  editar(produtoId: number, produto: Produto): Promise<Produto>;
}

export default EditarProdutoPort;
