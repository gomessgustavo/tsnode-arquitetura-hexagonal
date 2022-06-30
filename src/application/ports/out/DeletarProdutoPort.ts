import { DeleteResult } from "typeorm";
import { Erro } from "../../core/domain/Erro";

interface DeletarProdutoPort {
  deletar(produtoId: number): Promise<DeleteResult | Erro>;
}

export default DeletarProdutoPort;
