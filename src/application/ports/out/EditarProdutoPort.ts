import { Erro } from "../../core/domain/Erro";
import { Produto } from "../../core/domain/Produto";

interface EditarProdutoPort {
  editar(produtoId: number, produto: Produto): Promise<Produto | Erro>;
}

export default EditarProdutoPort;
