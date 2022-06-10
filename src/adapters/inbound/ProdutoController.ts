import { Request, Response } from "express";
import { SalvarProdutoService } from "../../application/core/service/SalvarProdutoService";
import ProdutoEntity from "./entity/ProdutoEntity";
// import { CriarProdutoRequest } from "./request/CriarProdutoRequest";
import { Produto } from "../../application/core/domain/Produto";
import { container } from "tsyringe";

class ProdutoController {
  async salvar(req: Request, res: Response): Promise<void> {
    const salvarProdutoService = container.resolve(SalvarProdutoService);
    const { body }: Request = req;
    const produto = body as Produto;
    salvarProdutoService.criar(produto);
    res.send(produto);
  }

  async listagem(_: Request, res: Response): Promise<void> {
    const produtos = await ProdutoEntity.findAll();

    res.send(produtos);
  }

  async porId(req: Request, res: Response): Promise<void> {
    const produto = await ProdutoEntity.findByPk(req.params.id);

    res.send(produto);
  }
}

export default new ProdutoController();
