import { Router } from "express";
import ProdutoController from "./adapters/inbound/ProdutoController";

const routes = Router();

routes.post("/produto", ProdutoController.salvar);
routes.get("/produto", ProdutoController.listagem);
routes.get("/produto/:id", ProdutoController.porId);

export default routes;
