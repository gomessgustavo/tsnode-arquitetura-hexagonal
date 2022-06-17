import { Request, Response } from "express";
import { SalvarProdutoService } from "../../application/core/service/SalvarProdutoService";
// import { CriarProdutoRequest } from "./request/CriarProdutoRequest";
import { Produto } from "../../application/core/domain/Produto";
import { container } from "tsyringe";
import { ListarProdutoService } from "../../application/core/service/ListarProdutoService";
import { DeletarProdutoService } from "../../application/core/service/DeletarProdutoService";
import { ProcurarProdutoService } from "../../application/core/service/ProcurarProdutoService";
import { EditarProdutoService } from "../../application/core/service/EditarProdutoService";
import { getResponse } from "../../application/core/http/Response";

export class ProdutoController {
  async salvar(req: Request, res: Response): Promise<void> {
    const salvarProdutoService = container.resolve(SalvarProdutoService);
    const { body }: Request = req;
    const produto = body as Produto;
    const produtoCriado = await salvarProdutoService.criar(produto);
    const formataResponse = getResponse(produtoCriado, 201);
    res.status(formataResponse.status).send(formataResponse.data);
  }

  async listagem(_: Request, res: Response): Promise<void> {
    const listarProdutosService = container.resolve(ListarProdutoService);
    const produtos = await listarProdutosService.listar();

    const formataResponse = getResponse(produtos);
    res.status(formataResponse.status).send(formataResponse.data);
  }

  async porId(req: Request, res: Response): Promise<void> {
    const procurarProdutoService = container.resolve(ProcurarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const produto = await procurarProdutoService.procurar(produtoId);

    const formataResponse = getResponse(produto);
    res.status(formataResponse.status).send(formataResponse.data);
  }

  async deletar(req: Request, res: Response): Promise<void> {
    const deletarProdutoService = container.resolve(DeletarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const response = await deletarProdutoService.deletar(produtoId);
    const formataResponse = getResponse(response, 204);
    res.status(formataResponse.status).send();
  }

  async editar(req: Request, res: Response): Promise<void> {
    const editarProdutoService = container.resolve(EditarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const response = await editarProdutoService.editar(produtoId, req.body);
    const formataResponse = getResponse(response);
    res.status(formataResponse.status).send(formataResponse.data);
  }
}
