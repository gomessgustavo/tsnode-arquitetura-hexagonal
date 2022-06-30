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
import { ProdutoRequest } from "./request/ProdutoRequest";
import { TypedRequest } from "./request/Request";
import ProdutoMapper from "./mapper/ProdutoMapper";

export class ProdutoController {
  async salvar(
    req: TypedRequest<ProdutoRequest>,
    res: Response
  ): Promise<void> {
    const salvarProdutoService = container.resolve(SalvarProdutoService);
    const { body } = req;

    const produtoMapeado = ProdutoMapper.toEntity(body);
    const produtoCriado = await salvarProdutoService.criar(produtoMapeado);
    const formataResponse = getResponse(produtoCriado, 201);
    res.status(formataResponse.status).json(formataResponse.data);
  }

  async listagem(_: Request, res: Response): Promise<void> {
    const listarProdutosService = container.resolve(ListarProdutoService);
    const produtos = await listarProdutosService.listar();

    const formataResponse = getResponse(produtos);
    res.status(formataResponse.status).json(formataResponse.data);
  }

  async porId(req: Request, res: Response): Promise<void> {
    const procurarProdutoService = container.resolve(ProcurarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const produto = await procurarProdutoService.procurar(produtoId);

    const formataResponse = getResponse(produto);
    res.status(formataResponse.status).json(formataResponse.data);
  }

  async deletar(req: Request, res: Response): Promise<void> {
    const deletarProdutoService = container.resolve(DeletarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const response = await deletarProdutoService.deletar(produtoId);
    const formataResponse = getResponse(response, 204);
    res.status(formataResponse.status).json();
  }

  async editar(
    req: TypedRequest<ProdutoRequest>,
    res: Response
  ): Promise<void> {
    const editarProdutoService = container.resolve(EditarProdutoService);
    const { id } = req.params;
    const produtoId = parseInt(id) | 0;
    const produtoMapeado = ProdutoMapper.toEntity(req.body);
    const response = await editarProdutoService.editar(
      produtoId,
      produtoMapeado
    );
    const formataResponse = getResponse(response);
    res.status(formataResponse.status).json(formataResponse.data);
  }
}
