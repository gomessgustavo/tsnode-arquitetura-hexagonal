import "reflect-metadata";
import { Erro } from "../application/core/domain/Erro";
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

    const erro = retorno as Erro;
    expect(erro.status).toBe(404);
    expect(erro.mensagem).toBe("Não foi encontrado nenhum produto com o id");
  });
});
