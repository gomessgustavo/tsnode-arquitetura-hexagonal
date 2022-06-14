import "reflect-metadata";
import "../application/shared";
import ProdutoController from "../adapters/inbound/ProdutoController";
import { Request, Response } from "express";

const mockRequest: Partial<Request> = {
  body: {
    nome: "Caneta",
    descricao: "Caneta Bic",
    preco: 0.25,
  },
};

const mockResponse = (): Partial<Response> => {
  const res = { status: jest.fn(), send: jest.fn() };
  res.status = res.status.mockReturnValue(res);
  res.send = res.send.mockReturnValue(res);
  return res;
};

describe("Produto controller", () => {
  it("Deve fazer requisição de criar com sucesso", async () => {
    jest.spyOn(ProdutoController, "salvar");
    const res = mockResponse();
    await ProdutoController.salvar(mockRequest as Request, res as Response);
    expect(res.send).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalled();
  });
});
