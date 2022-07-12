import { ProdutoController } from "./adapters/inbound/ProdutoController";
import { Router } from "express";
import { UsuarioController } from "./adapters/inbound/UsuarioController";
import { VeiculoController } from "./adapters/inbound/VeiculoController";
import { verificarToken } from "./application/middlewares/auth";

const routes = Router();

const produtoController = new ProdutoController();
const usuarioController = new UsuarioController();
const veiculoController = new VeiculoController();

routes.post("/produto", verificarToken, produtoController.salvar);
routes.get("/produto", verificarToken, produtoController.listagem);
routes.get("/produto/:id", verificarToken, produtoController.porId);
routes.delete("/produto/:id", verificarToken, produtoController.deletar);
routes.put("/produto/:id", verificarToken, produtoController.editar);

routes.post("/usuario", verificarToken, usuarioController.salvar);
routes.post("/veiculo/:usuarioId", verificarToken, veiculoController.salvar);
routes.get("/usuario/:usuarioId", verificarToken, usuarioController.buscar);
routes.post("/login", usuarioController.logar);

export default routes;
