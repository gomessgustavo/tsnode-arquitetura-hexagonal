import { DeleteResult } from "typeorm";
import { Erro } from "../../core/domain/Erro";

interface DeletarProdutoServicePort {
  deletar(produtoId: number): Promise<DeleteResult | Erro>;
}

export default DeletarProdutoServicePort;
