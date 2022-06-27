import { Request, Response } from "express";
import { container } from "tsyringe";
import { Usuario } from "../../application/core/domain/Usuario";
import { getResponse } from "../../application/core/http/Response";
import { SalvarUsuarioService } from "../../application/core/service/SalvarUsuarioService";

export class UsuarioController {
  async salvar(req: Request, res: Response): Promise<void> {
    const salvarUsuarioService = container.resolve(SalvarUsuarioService);
    const { body } = req;
    const usuario = body as Usuario;
    const usuarioCriado = await salvarUsuarioService.criar(usuario);
    const formataResponse = getResponse(usuarioCriado, 201);
    res.status(formataResponse.status).send(formataResponse.data);
  }
}
