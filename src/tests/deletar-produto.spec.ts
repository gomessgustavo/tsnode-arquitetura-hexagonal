import "reflect-metadata";
import { Produto } from "../application/core/domain/Produto";
import { FakeDeletarProduto } from "./fakes/FakeDeletarProduto";
import { DeletarProdutoService } from "../application/core/service/DeletarProdutoService";

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
    expect(retorno).toBe(0);
  });
});
