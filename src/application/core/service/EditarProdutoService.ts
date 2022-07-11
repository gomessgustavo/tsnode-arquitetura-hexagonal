import { inject, injectable } from "tsyringe";
import ProdutoMapper from "../../../adapters/inbound/mapper/ProdutoMapper";
import { ProdutoRequest } from "../../../adapters/inbound/request/ProdutoRequest";
import { ProdutoResponse } from "../../../adapters/inbound/response/ProdutoResponse";
import ProdutoRepository from "../../../adapters/outbound/repository/ProdutoRepository";
import { EditarProdutoServicePort } from "../../ports/in/EditarProdutoServicePort";
import EditarProdutoPort from "../../ports/out/EditarProdutoPort";
import { Erro } from "../domain/Erro";
import { Produto } from "../domain/Produto";

@injectable()
export class EditarProdutoService implements EditarProdutoServicePort {
  constructor(
    @inject("EditarProdutoAdapter")
    private editarProdutoPort: EditarProdutoPort
  ) {
    this.editar = this.editar.bind(this);
  }

  editar = async (
    produtoId: number,
    produto: ProdutoRequest
  ): Promise<ProdutoResponse | Erro> => {
    try {
      const produtoPorId = await ProdutoRepository.porId(produtoId);
      if (!produtoPorId) {
        throw new Erro("Não foi encontrado produto com esse id", 404);
      }

      const produtoEntity = ProdutoMapper.toEntity(produto);
      const produtoEditado = await this.editarProdutoPort.editar(
        produtoId,
        produtoEntity
      );

      if (produtoEditado instanceof Erro) {
        throw produtoEditado;
      }

      return ProdutoMapper.toResponse(produtoEditado);
    } catch (erro) {
      if (erro instanceof Erro) {
        return new Erro(erro.mensagem, erro.status);
      }

      return new Erro("Falha ao editar o produto", 400);
    }
  };
}
