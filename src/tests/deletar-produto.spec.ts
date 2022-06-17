import "reflect-metadata";
import { FakeDeletarProduto } from "./fakes/FakeDeletarProduto";
import { DeletarProdutoService } from "../application/core/service/DeletarProdutoService";
import { Erro } from "../application/core/domain/Erro";

let fakeDeletarProduto: FakeDeletarProduto;
let service: DeletarProdutoService;

describe("Deletar produto", () => {
  beforeEach(() => {
    fakeDeletarProduto = new FakeDeletarProduto();
    service = new DeletarProdutoService(fakeDeletarProduto);
  });

  it("Deve deletar um produto com sucesso", async () => {
    const id = 1;
    const retorno = await service.deletar(id);

    expect(retorno).toBe(id);
  });

  it("Deve tentar deletar um produto não existente", async () => {
    const retorno = await service.deletar(2);
    const erro = retorno as Erro;

    expect(erro.status).toBe(404);
    expect(erro.mensagem).toBe("Não foi possível deletar o produto");
  });
});
