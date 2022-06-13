import { container } from "tsyringe";
import SalvarProdutoPort from "../ports/out/SalvarProdutoPort";
import { SalvarProdutoAdapter } from "../../adapters/outbound/SalvarProdutoAdapter";
import ListarProdutosPort from "../../application/ports/out/ListarProdutosPort";
import { ListarProdutoAdapter } from "../../adapters/outbound/ListarProdutoAdapter";

container.registerSingleton<SalvarProdutoPort>(
  "SalvarProdutoAdapter",
  SalvarProdutoAdapter
);

container.registerSingleton<ListarProdutosPort>(
  "ListarProdutoAdapter",
  ListarProdutoAdapter
);
