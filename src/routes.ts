import { Router } from "express";
import ProdutoController from "./adapters/inbound/ProdutoController";

const routes = Router();

routes.post("/produto", ProdutoController.salvar);
routes.get("/produto", ProdutoController.listagem);
routes.get("/produto/:id", ProdutoController.porId);
routes.delete("/produto/:id", ProdutoController.deletar);

export default routes;
