import { container } from "tsyringe";
import SalvarProdutoPort from "../ports/out/SalvarProdutoPort";
import { SalvarProdutoAdapter } from "../../adapters/outbound/SalvarProdutoAdapter";
import ListarProdutosPort from "../ports/out/ListarProdutosPort";
import { ListarProdutoAdapter } from "../../adapters/outbound/ListarProdutoAdapter";
import DeletarProdutoPort from "../ports/out/DeletarProdutoPort";
import { DeletarProdutoAdapter } from "../../adapters/outbound/DeletarProdutoAdapter";
import ProcurarProdutoPort from "../ports/out/ProcurarProdutoPort";
import { ProcurarProdutoAdapter } from "../../adapters/outbound/ProcurarProdutoAdapter";
import EditarProdutoPort from "../ports/out/EditarProdutoPort";
import { EditarProdutoAdapter } from "../../adapters/outbound/EditarProdutoAdapter";
import SalvarUsuarioPort from "../ports/out/SalvarUsuarioPort";
import { SalvarUsuarioAdapter } from "../../adapters/outbound/SalvarUsuarioAdapter";
import BuscarCepPort from "../ports/out/BuscarCepPort";
import { BuscarCepAdapter } from "../../adapters/outbound/BuscarCepAdapter";

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

container.registerSingleton<ProcurarProdutoPort>(
  "ProcurarProdutoAdapter",
  ProcurarProdutoAdapter
);

container.registerSingleton<EditarProdutoPort>(
  "EditarProdutoAdapter",
  EditarProdutoAdapter
);

container.registerSingleton<SalvarUsuarioPort>(
  "SalvarUsuarioAdapter",
  SalvarUsuarioAdapter
);

container.registerSingleton<BuscarCepPort>(
  "BuscarCepAdapter",
  BuscarCepAdapter
);
