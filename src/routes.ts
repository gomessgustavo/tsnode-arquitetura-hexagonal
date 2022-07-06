import { ProdutoController } from "./adapters/inbound/ProdutoController";
import { Router } from "express";
import { UsuarioController } from "./adapters/inbound/UsuarioController";
import { VeiculoController } from "./adapters/inbound/VeiculoController";

const routes = Router();

const produtoController = new ProdutoController();
const usuarioController = new UsuarioController();
const veiculoController = new VeiculoController();

routes.post("/produto", produtoController.salvar);
routes.get("/produto", produtoController.listagem);
routes.get("/produto/:id", produtoController.porId);
routes.delete("/produto/:id", produtoController.deletar);
routes.put("/produto/:id", produtoController.editar);

routes.post("/usuario", usuarioController.salvar);
routes.post("/veiculo/:usuarioId", veiculoController.salvar);
routes.get("/usuario/:usuarioId", usuarioController.buscar);

export default routes;
