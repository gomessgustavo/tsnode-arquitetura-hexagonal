import { container } from "tsyringe";
import SalvarProdutoPort from "../ports/out/SalvarProdutoPort";
import { SalvarProdutoAdapter } from "../../adapters/outbound/SalvarProdutoAdapter";

container.registerSingleton<SalvarProdutoPort>(
  "SalvarProdutoAdapter",
  SalvarProdutoAdapter
);
