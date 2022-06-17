import { Erro } from "../../core/domain/Erro";

interface DeletarProdutoPort {
  deletar(produtoId: number): Promise<number | Erro>;
}

export default DeletarProdutoPort;
