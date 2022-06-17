import { Erro } from "../../core/domain/Erro";

interface DeletarProdutoServicePort {
  deletar(produtoId: number): Promise<number | Erro>;
}

export default DeletarProdutoServicePort;
