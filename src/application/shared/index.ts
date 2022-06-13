import { container } from "tsyringe";
import SalvarProdutoPort from "../ports/out/SalvarProdutoPort";
import { SalvarProdutoAdapter } from "../../adapters/outbound/SalvarProdutoAdapter";
import ListarProdutosPort from "../../application/ports/out/ListarProdutosPort";
import { ListarProdutoAdapter } from "../../adapters/outbound/ListarProdutoAdapter";
import DeletarProdutoPort from "application/ports/out/DeletarProdutoPort";
import { DeletarProdutoAdapter } from "../../adapters/outbound/DeletarProdutoAdapter";

container.registerSingleton<SalvarProdutoPort>(
  "SalvarProdutoAdapter",
  SalvarProdutoAdapter
);

container.registerSingleton<ListarProdutosPort>(
  "ListarProdutoAdapter",
  ListarProdutoAdapter
);

container.registerSingleton<DeletarProdutoPort>(
  "DeletarProdutoAdapter",
  DeletarProdutoAdapter
);
