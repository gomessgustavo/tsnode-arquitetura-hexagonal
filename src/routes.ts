import { ProdutoController } from "./adapters/inbound/ProdutoController";
import { Router } from "express";

const routes = Router();

const produtoController = new ProdutoController();

routes.post("/produto", produtoController.salvar);
routes.get("/produto", produtoController.listagem);
routes.get("/produto/:id", produtoController.porId);
routes.delete("/produto/:id", produtoController.deletar);
routes.put("/produto/:id", produtoController.editar);

export default routes;
