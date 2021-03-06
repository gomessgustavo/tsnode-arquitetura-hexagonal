import "reflect-metadata";
import "../application/shared";
import { ProdutoController } from "../adapters/inbound/ProdutoController";
import { container } from "tsyringe";
import { FakeCriarProduto } from "./fakes/FakeCriarProduto";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { FakeListarProduto } from "./fakes/FakeListarProduto";
import { FakeBuscarProduto } from "./fakes/FakeBuscarProduto";
import { Response } from "express";
import { FakeDeletarProduto } from "./fakes/FakeDeletarProduto";
import { Produto } from "../application/core/domain/Produto";
import { FakeEditarProduto } from "./fakes/FakeEditarProduto";

describe("Produto controller", () => {
  let produtoController = new ProdutoController();
  let mockResponse: Response;
  beforeEach(() => {
    mockResponse = getMockRes().res;

    container.registerSingleton("SalvarProdutoAdapter", FakeCriarProduto);
    container.registerSingleton("ListarProdutoAdapter", FakeListarProduto);
    container.registerSingleton("ProcurarProdutoAdapter", FakeBuscarProduto);
    container.registerSingleton("DeletarProdutoAdapter", FakeDeletarProduto);
    container.registerSingleton("EditarProdutoAdapter", FakeEditarProduto);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("Deve fazer requisição de criar com sucesso", async () => {
    const produto = {
      nome: "Caneta",
      descricao: "Caneta Bic",
      preco: 0.25,
    };

    const mockRequest = getMockReq({ body: produto });

    await produtoController.salvar(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(201);
  });

  it("Deve fazer requisição de buscar os produtos", async () => {
    const produtos: Produto[] = [];

    const mockRequest = getMockReq();

    await produtoController.listagem(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith(produtos);
  });

  it("Deve fazer requisição de buscar o produto por id", async () => {
    const produto = {
      id: 1,
      nome: "Caneta",
      descricao: "Caneta da marca bic",
      preco: 0.25,
    };

    const mockRequest = getMockReq({ params: { id: "1" } });

    await produtoController.porId(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith(produto);
  });
  it("Deve fazer requisição de buscar o produto por id e não encontrar", async () => {
    const mockRequest = getMockReq({ params: { id: "2" } });

    await produtoController.porId(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalled();
  });
  it("Deve deletar produto com sucesso", async () => {
    const mockRequest = getMockReq({ params: { id: "1" } });

    await produtoController.deletar(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(204);
    expect(mockResponse.send).toHaveBeenCalled();
  });
  it("Deve não conseguir deletar produto", async () => {
    const mockRequest = getMockReq({ params: { id: "2" } });

    await produtoController.deletar(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalled();
  });

  it("Deve fazer requisição de editar com sucesso", async () => {
    const produto = {
      nome: "Lápis",
      descricao: "Lápis de colorir",
      preco: 0.25,
    };

    const mockRequest = getMockReq({ body: produto, params: { id: "1" } });

    await produtoController.editar(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith({ id: 1, ...produto });
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it("Deve fazer requisição de editar e não encontrar o produto", async () => {
    const produto = {
      nome: "Lápis",
      descricao: "Lápis de colorir",
      preco: 0.25,
    };

    const mockRequest = getMockReq({ body: produto, params: { id: "2" } });

    await produtoController.editar(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith(
      "Não foi encontrado nenhum produto"
    );
    expect(mockResponse.status).toHaveBeenCalledWith(404);
  });
});
