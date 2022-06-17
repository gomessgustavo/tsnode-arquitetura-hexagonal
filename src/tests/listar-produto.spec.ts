import "reflect-metadata";
import { ListarProdutoService } from "../application/core/service/ListarProdutoService";
import { FakeListarProduto } from "./fakes/FakeListarProduto";

let fakeListarProduto: FakeListarProduto;
let service: ListarProdutoService;

describe("Listagem de produto", () => {
  beforeEach(() => {
    fakeListarProduto = new FakeListarProduto();
    service = new ListarProdutoService(fakeListarProduto);
  });

  it("Deve listar produtos com sucesso", async () => {
    const retorno = await service.listar();
    expect(retorno).toStrictEqual([]);
  });
});
