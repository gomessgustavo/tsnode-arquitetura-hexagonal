import "reflect-metadata";
import { SalvarProdutoService } from "../application/core/service/SalvarProdutoService";
import { Produto } from "../application/core/domain/Produto";
import { FakeCriarProduto } from "./fakes/FakeCriarProduto";

let fakeCriarProduto: FakeCriarProduto;
let service: SalvarProdutoService;

describe("Cadastro de produto", () => {
  beforeEach(() => {
    fakeCriarProduto = new FakeCriarProduto();
    service = new SalvarProdutoService(fakeCriarProduto);
  });

  it("Deve cadastrar um produto novo com sucesso", async () => {
    const produtoNovo = {
      nome: "Lápis",
      descricao: "Lápis colorido faber castell",
      preco: 10,
    } as Produto;

    const retorno = await service.criar(produtoNovo);
    expect(retorno).toHaveProperty("id");
  });
});
