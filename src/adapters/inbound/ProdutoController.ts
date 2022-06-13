import { Request, Response } from "express";
import { SalvarProdutoService } from "../../application/core/service/SalvarProdutoService";
import ProdutoEntity from "./entity/ProdutoEntity";
// import { CriarProdutoRequest } from "./request/CriarProdutoRequest";
import { Produto } from "../../application/core/domain/Produto";
import { container } from "tsyringe";
import { ListarProdutoService } from "../../application/core/service/ListarProdutoService";

class ProdutoController {
  async salvar(req: Request, res: Response): Promise<void> {
    const salvarProdutoService = container.resolve(SalvarProdutoService);
    const { body }: Request = req;
    const produto = body as Produto;
    salvarProdutoService.criar(produto);
    res.send(produto);
  }

  async listagem(_: Request, res: Response): Promise<void> {
    const listarProdutosService = container.resolve(ListarProdutoService);
    const produtos = await listarProdutosService.listar();
    res.send(produtos);
  }

  async porId(req: Request, res: Response): Promise<void> {
    const produto = await ProdutoEntity.findByPk(req.params.id);

    res.send(produto);
  }
}

export default new ProdutoController();
