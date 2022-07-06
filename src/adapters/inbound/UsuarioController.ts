import { Request, Response } from "express";
import { container } from "tsyringe";
import { Usuario } from "../../application/core/domain/Usuario";
import { getResponse } from "../../application/core/http/Response";
import { BuscarUsuarioSevice } from "../../application/core/service/BuscarUsuarioService";
import { SalvarUsuarioService } from "../../application/core/service/SalvarUsuarioService";
import UsuarioMapper from "./mapper/UsuarioMapper";
import { TypedRequest } from "./request/Request";
import { UsuarioRequest } from "./request/UsuarioRequest";

export class UsuarioController {
  async salvar(
    req: TypedRequest<UsuarioRequest>,
    res: Response
  ): Promise<void> {
    const salvarUsuarioService = container.resolve(SalvarUsuarioService);
    const { body } = req;
    const usuarioMapeado = UsuarioMapper.toEntity(body);
    const usuarioCriado = await salvarUsuarioService.criar(usuarioMapeado);
    const formataResponse = getResponse(usuarioCriado, 201);
    res.status(formataResponse.status).send(formataResponse.data);
  }

  async buscar(req: Request, res: Response): Promise<void> {
    const buscarUsuarioService = container.resolve(BuscarUsuarioSevice);
    const { usuarioId } = req.params;
    const usuarioBuscado = parseInt(usuarioId) | 0;
    const usuario = await buscarUsuarioService.buscar(usuarioBuscado);

    const formataResponse = getResponse(usuario);
    res.status(formataResponse.status).json(formataResponse.data);
  }
}
