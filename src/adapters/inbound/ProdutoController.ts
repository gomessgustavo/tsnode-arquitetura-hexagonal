import { Request, Response } from "express";
import { SalvarProdutoService } from "../../application/core/service/SalvarProdutoService";
import ProdutoEntity from "./entity/ProdutoEntity";
// import { CriarProdutoRequest } from "./request/CriarProdutoRequest";
import { Produto } from "../../application/core/domain/Produto";
import { container } from "tsyringe";
import { ListarProdutoService } from "../../application/core/service/ListarProdutoService";
import { DeletarProdutoService } from "../../application/core/service/DeletarProdutoService";

class ProdutoController {
  async salvar(req: Request, res: Response): Promise<void> {
    const salvarProdutoService = container.resolve(SalvarProdutoService);
    const { body }: Request = req;
    const produto = body as Produto;
    salvarProdutoService.criar(produto);
    res.status(201).send(produto);
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

  async deletar(req: Request, res: Response): Promise<void> {
    const deletarProdutoService = container.resolve(DeletarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const response = await deletarProdutoService.deletar(produtoId);
    const status = response ? 204 : 404;
    res.status(status).send();
  }
}

export default new ProdutoController();
