import "reflect-metadata";
import { ProcurarProdutoService } from "../application/core/service/ProcurarProdutoService";
import { FakeBuscarProduto } from "./fakes/FakeBuscarProduto";

let fakeBuscarProduto: FakeBuscarProduto;
let service: ProcurarProdutoService;

describe("Buscar produto por id", () => {
  beforeEach(() => {
    fakeBuscarProduto = new FakeBuscarProduto();
    service = new ProcurarProdutoService(fakeBuscarProduto);
  });

  it("Deve buscar um produto com sucesso", async () => {
    const id = 1;
    const retorno = await service.procurar(id);

    expect(retorno).toHaveProperty("id");
  });

  it("Deve buscar um produto e não encontrar", async () => {
    const id = 2;
    const retorno = await service.procurar(id);

    expect(retorno).toBeNull();
  });
});
