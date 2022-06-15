import "reflect-metadata";
import "../application/shared";
import { ProdutoController } from "../adapters/inbound/ProdutoController";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { FakeCriarProduto } from "./fakes/FakeCriarProduto";

const produto = {
  nome: "Caneta",
  descricao: "Caneta Bic",
  preco: 0.25,
};

const mockRequest: Partial<Request> = {
  body: produto,
};

const mockResponse: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
};

describe("Produto controller", () => {
  let produtoController = new ProdutoController();
  beforeEach(() => {
    container.registerSingleton("SalvarProdutoAdapter", FakeCriarProduto);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("Deve fazer requisição de criar com sucesso", async () => {
    await produtoController.salvar(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockResponse.send).toHaveBeenCalledWith(produto);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
  });
});
