import { ProdutoController } from "./adapters/inbound/ProdutoController";
import { Router } from "express";
import { UsuarioController } from "./adapters/inbound/UsuarioController";

const routes = Router();

const produtoController = new ProdutoController();
const usuarioController = new UsuarioController();

routes.post("/produto", produtoController.salvar);
routes.get("/produto", produtoController.listagem);
routes.get("/produto/:id", produtoController.porId);
routes.delete("/produto/:id", produtoController.deletar);
routes.put("/produto/:id", produtoController.editar);

routes.post("/usuario", usuarioController.salvar);

export default routes;
