import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Erro } from "../core/domain/Erro";
import secret from "../security/secret.json";

export const verificarToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-access-token"] as string;

  if (!token) {
    const erro = new Erro("Nenhum token encontrado", 403);
    return res.status(erro.status).json(erro);
  }
  try {
    verify(token, secret.chave);
  } catch (err) {
    const erro = new Erro("Token inválido", 401);
    return res.status(erro.status).json(erro);
  }
  return next();
};
