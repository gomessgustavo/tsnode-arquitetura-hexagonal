import { SalvarProdutoService } from "../application/core/service/SalvarProdutoService";
import { Produto } from "../application/core/domain/Produto";
import { Fake } from "./fake";

let fake: Fake;
let service: SalvarProdutoService;
describe("Cadastro de produto", () => {
  beforeEach(() => {
    fake = new Fake();
    service = new SalvarProdutoService(fake);
  });

  it("Deve cadastrar um produto novo com sucesso", () => {
    const produtoNovo = {
      nome: "Lápis",
      descricao: "Lápis colorido faber castell",
      preco: 10,
    } as Produto;

    const retorno = service.criar(produtoNovo);
    expect(retorno).toHaveProperty("id");
  });
});
